$(document).ready(function() {

	function restTimer() {
		console.log("rest timer called");
		// secondsCounter();
		fullRest();
	 }

	 function actionTimer() {
	 		console.log("action timer called");
 	    setTimeout(function(){
 			    restTimer();
 			    audio.append('<audio src="./Audio/beep01.mp3" preload="auto" autoplay></audio>');
 		  	}, 10000);
	 }

	 function fullRest() {
	 		console.log("full rest timer");
	 	  setTimeout(function(){
	 	  	audio.append('<audio src="./Audio/beep02.mp3" preload="auto" autoplay></audio>');
		    actionTimer();
	  	}, 5000);
	 }

	restTimer();


	var button = $('#sound');
	var audio = $('#audio');

	button.on('click', function() {
		console.log('clicked');
	});

});