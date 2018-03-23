$(".sheep").on("click", function {
	playSound(Audio("sheepsound.mp3"))
})

function playSound(soundFile) {
	soundFile.play();
}