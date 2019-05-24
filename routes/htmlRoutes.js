var db = require("../models");
//allows us to use relative routes to HTMl files
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

var axios = require("axios");

// var keys = require("../keys");
// var spotifyApi = new SpotifyWebApi();

// var artistUrl;
// var spotifyArtist = {
//   url: "",
//   images: "",
//   bandName: "",
//   genres: [],
// };


module.exports = function (app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


  app.get("/login", function(req, res) {
    console.log(req)
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });


  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("members", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // app.get("/artist", function (req, res) {
  //   res.render("artist", {
  //     url: spotifyArtist.url,
  //     images: spotifyArtist.images,
  //     bandName: spotifyArtist.bandName,
  //     genres: spotifyArtist.genres,
  //   });
  // })

  app.post("/search-spotify", function (req, res) {
    var artistSearch = req.body.artist.trim();

    spotify.search({ type: "artist", query: artistSearch, limit: 4 }, function (err, data) {

      // Error handler
      if (err) {
        return console.log(err);
      }
      console.log(data);
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

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

};