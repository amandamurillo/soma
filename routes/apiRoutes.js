var db = require("../models");
var passport = require("../config/passport");

// ************** User ****************** //

module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the profile page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  // Route for creating a new user. If the user is created successfully, proceed to log the user in, otherwise send back an error

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    console.log(req.user);
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  // ************** Spotify ****************** //
  app.get("/api/spotify", function (req, res) {
    return res.send('Received a GET HTTP method');

      // res.json("Hope this works");
    });


  // ************** Reviews ****************** //

  // GET route for getting all of the reviews
  app.get("/api/reviews", function (req, res) {
    db.Review.findAll({}).then(function (dbReviews) {
      res.json(dbReviews);
    });
  });

  // Create a new review
  app.post("/api/reviews", function (req, res) {
    db.Review.create(req.body).then(function (dbReview) {
      res.json(dbReview);
    });
  });

  // Delete a review by id
  app.delete("/api/reviews/:id", function (req, res) {
    db.Review.destroy({ where: { id: req.params.id } }).then(function (dbReview) {
      res.json(dbReview);
    });
  });

};

