

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});


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

// var buttontest = $("button.test");

$("#button1").on("click", function(event) {
  event.preventDefault();
  // Get the input values
  var searchInput = $("#searchInput").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  console.log(searchInput);

  // send an AJAX POST-request with jQuery

})