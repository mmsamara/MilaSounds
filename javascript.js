var sheepSound = document.createElement("audio");
sheepSound.setAttribute("src", "sounds/sheepsound.mp3");

var monkeySound = document.createElement("audio");
monkeySound.setAttribute("src", "sounds/monkeysound.mp3");

var birdSound = document.createElement("audio");
birdSound.setAttribute("src", "sounds/birdsound.mp3");

var cowSound = document.createElement("audio");
cowSound.setAttribute("src", "sounds/cowsound.mp3");

var dinoSound = document.createElement("audio");
dinoSound.setAttribute("src", "sounds/dinosound.mp3");

var dogSound = document.createElement("audio");
dogSound.setAttribute("src", "sounds/dogsound.mp3");

var horseSound = document.createElement("audio");
horseSound.setAttribute("src", "sounds/horsesound.mp3");

var owlSound = document.createElement("audio");
owlSound.setAttribute("src", "sounds/owlsound.mp3");

var pigSound = document.createElement("audio");
pigSound.setAttribute("src", "sounds/pigsound.mp3");

var snakeSound = document.createElement("audio");
snakeSound.setAttribute("src", "sounds/snakesound.mp3");

$(".sheep").on("click", function() {
	sheepSound.play();
})

$(".monkey").on("click", function() {
	monkeySound.play();
})

$(".horse").on("click", function() {
	horseSound.play();
})

$(".bird").on("click", function() {
	birdSound.play();
})

$(".dog").on("click", function() {
	dogSound.play();
})

$(".owl").on("click", function() {
	owlSound.play();
})

$(".pig").on("click", function() {
	pigSound.play();
})

$(".snake").on("click", function() {
	snakeSound.play();
})

$(".cow").on("click", function() {
	cowSound.play();
})

$(".dinosaur").on("click", function() {
	dinoSound.play();
})