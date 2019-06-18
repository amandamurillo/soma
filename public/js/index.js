var song;
var fft;
var button;
var w;
var canvas;


function preload() {
  song = loadSound('js/loyal.mp3');
}
// function centerCanvas() {
//   var x = (windowWidth - width) / 4;
//   var y = (windowHeight - height) / 4;
//   canvas.position(x, y);
// }

function setup() {
  canvas = createCanvas(windowWidth, 300);
  // centerCanvas();
  // canvas.style('z-index', '-1');
  // canvas.createDiv(['<div id="sketch-holder"> </div>'])
  // myCanvas.parent('homebtns');
  canvas.style('display', 'block');
  canvas.position(100,200)
  canvas.style('height', '300px')
        .style('position', 'absolute')
        .style('left', '0px')
        .style('height', '300px')
        .style('position', 'absolute')
        .style('left', '0px')
        .style('top', '650px')
        // .style('z-index', '-1')

  // background('#050725');
  colorMode(HSB);
  blendMode(BLEND)
  angleMode(DEGREES);
  button = createButton('sound').addClass('sound_btn').addClass('cover').addClass('btn-lg')
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0, 64);
  w = width / 64;
}


function draw() {
  background('#050725');
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

function toggleSong() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

