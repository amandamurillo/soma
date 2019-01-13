var db = require("../models");
var path = require("path");
var artistUrl;
var Spotify = require("node-spotify-api");
var keys = require("../keys");
var spotify = new Spotify(keys);


module.exports = function (app) {


  app.post("/search-spotify", function (req, res) {
    var artistSearch = req.body.artist.trim();

    spotify.search({ type: "artist", query: artistSearch, limit: 1 }, function (err, data) {
      // Error handler
      if (err) {
        return console.log(err);
      }

      // This is the variable we are passing through handlebars
      artistUrl = data.artists.items[0].href;

      res.redirect("/artist");
    });

    // res.redirect("/");
  });

  // Load index page
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("../views/layouts/main");
  });

  // Load create account page
  app.get("/create", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // Load signIn page

  app.get("/signIn", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signIn.html"))
  })

  // Load user profile page
  app.get("/user", function (req, res) {
    res.render("user", { test: "works" });
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
    res.render("artist", { spotifyArtist: artistUrl });
  })



  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
