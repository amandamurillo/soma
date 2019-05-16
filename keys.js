
// console.log('this is loaded');
// var keys = {
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET,
// }

// module.exports = keys;

console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  };