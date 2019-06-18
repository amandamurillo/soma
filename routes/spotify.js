// DEPENDENCIES
// =====================================
var 
var request = require('request'); // "Request" library
// var keys = require("../keys");

// var getArtistID = function(artist) {
//   return artist.id;
// };

 function getMeSpotify (artist) {
    var client_id = "06bbb333f9604d90aad6359ee5fca2e1"; // Your client id
    var client_secret = "b74dba880c9246c7a41b0309049be17f"; // Your secret
  // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true 
    };

 request.post(authOptions, artist, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    let artists = `${artist}&type=artist&market=US&limit=5`
    var options = {
      url: `https://api.spotify.com/v1/search?q=${artists}`,
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      // console.log(body)
      console.log("-----------------------------------");
      console.log(body.artists.items[0].name);
      console.log("-----------------------------------");
      console.log(body.artists.items[0].genres);
      console.log("-----------------------------------");
      console.log(body.artists.items[0].id);
      console.log("-----------------------------------");
    });

  }
});
}

// MAIN PROCESS
// =====================================

console.log(getMeSpotify("bob dylan"));


