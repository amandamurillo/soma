var db = require("../models");
var path = require("path");
var artistUrl;
var spotifyArtist = {
  url: "",
  images: "",
  bandName: "",
  genres: [],
};

var Spotify = require("node-spotify-api");
var keys = require("../keys");
var spotify = new Spotify(keys);

module.exports = function (app) {


  app.post("/search-spotify", function (req, res) {
    var artistSearch = req.body.artist.trim();

    spotify.search({ type: "artist", query: artistSearch, limit: 4 }, function (err, data) {

      // Error handler
      if (err) {
        return console.log(err);
      }

      console.log(data.artists.items[1]);
      // console.log(data.artists.items[0]);
      artistUrl = data.artists.items[0].href;
      spotifyArtist.url = data.artists.items[0].external_urls.spotify;
      spotifyArtist.images = data.artists.items[0].images[0].url;
      spotifyArtist.bandName = data.artists.items[0].name;
      spotifyArtist.genres = data.artists.items[0].genres[0];

      res.redirect("/artist");

    });

    // res.redirect("/");
  });

  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      createCss: "create.css",
      artistCss: "artist.css",
      signInCss: "signIn.css",
      userCss: "user.css"
    });
  });

  // Load create account page
  app.get("/create", function (req, res) {
    res.render("create", {
      createCss: "create.css",
      artistCss: "artist.css",
      signInCss: "signIn.css",
      userCss: "user.css"
    });
  });

  // Load signIn page

  app.get("/signIn", function (req, res) {
    res.render("signIn", {
      createCss: "create.css",
      artistCss: "artist.css",
      signInCss: "signIn.css",
      userCss: "user.css"
    });
  })

  // Load user profile page
  app.get("/user", function (req, res) {
    res.render("user", {
      createCss: "create.css",
      artistCss: "artist.css",
      signInCss: "signIn.css",
      userCss: "user.css"
    });
  });

  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("main", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/artist", function (req, res) {
    res.render("artist", {
      url: spotifyArtist.url,
      images: spotifyArtist.images,
      bandName: spotifyArtist.bandName,
      genres: spotifyArtist.genres,
      createCss: "create.css",
      artistCss: "artist.css",
      signInCss: "signIn.css",
      userCss: "user.css"
    });
  })



  // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};