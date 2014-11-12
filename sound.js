var pannerLeft = new Tone.Panner();
var pannerRight = new Tone.Panner();

pannerLeft.setPan(0);
pannerRight.setPan(1);

var E4r = new Tone.Player('sounds/e4.wav', playerLoadedRight);
var F4r = new Tone.Player('sounds/f4.wav', playerLoadedRight);
var B4r = new Tone.Player('sounds/b4.wav', playerLoadedRight);
var C5r = new Tone.Player('sounds/c5.wav', playerLoadedRight);
var D5r = new Tone.Player('sounds/d5.wav', playerLoadedRight);

var E4l = new Tone.Player('sounds/e4.wav', playerLoadedLeft);
var F4l = new Tone.Player('sounds/f4.wav', playerLoadedLeft);
var B4l = new Tone.Player('sounds/b4.wav', playerLoadedLeft);
var C5l = new Tone.Player('sounds/c5.wav', playerLoadedLeft);
var D5l = new Tone.Player('sounds/d5.wav', playerLoadedLeft);

function playerLoadedLeft(player) {
  //able to be retriggered before the file is done playing
  player.retrigger = true;
  player.connect(pannerLeft);
  pannerLeft.toMaster();
}

function playerLoadedRight(player) {
  //able to be retriggered before the file is done playing
  player.retrigger = true;
  player.connect(pannerRight);
  pannerRight.toMaster();
}