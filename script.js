$(document).ready(function() {

	var audio = $('#audio'),
			resetButton = $('#reset-button'),
			restInterval,
			actionInterval,
			restCounter,
			actionCounter;

	function actionTimer(){
	  actionCounter = 10;
	  actionInterval = setInterval(function() {
	    actionCounter--;
	    if (actionCounter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = actionCounter;
	    }
	    if (actionCounter === 0) {
	        //alert('sorry, out of time');
	        clearInterval(actionInterval);
	        audio.append('<audio src="./Audio/beep02.mp3" preload="auto" autoplay></audio>');
	        restTimer();
	    }
	  }, 1000);
	}

	function restTimer() {
		restCounter = 5;
	  restInterval = setInterval(function() {
	    restCounter--;
	    if (restCounter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = restCounter;
	    }
	    if (restCounter === 0) {
	        //alert('sorry, out of time');
	        audio.append('<audio src="./Audio/beep01.mp3" preload="auto" autoplay></audio>');
	        clearInterval(restInterval);
	        actionTimer();
	    }
	  }, 1000);
	}

	$("#start-button").click(function(){
	    actionTimer();
	 });
	
	resetButton.on('click', function() {
			clearInterval(restInterval);
			clearInterval(actionInterval);
			span = document.getElementById("count");
			span.innerHTML = 10;
	});

});