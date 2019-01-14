var song;
var fft;
var button;
var w;
var canvas;

function toggleSong() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
function preload() {
  // song = loadSound('js/loyal.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth, 200);
  canvas.position(0, 0);
  // canvas.addClass('canvas')
  canvas.style('z-index', '1');
  background(100);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('sound').addClass('sound_btn')
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0, 64);
  w = width / 64;
}


function draw() {
  background(0);
  var spectrum = fft.analyze();
  // console.log(spectrum);
  // stroke(255);
  noStroke();
  // beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 2, height - y);
    //vertex(x, y);
  }
  // endShape();
}