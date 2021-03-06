$(document).ready(function() {

	var audio = $('#audio'),
			resetButton = $('#reset-button'),
			startButton = $("#start-button"),
			restInterval,
			actionInterval,
			restCounter,
			actionCounter;

	resetButton.hide();

	function actionTimer(){
		audio.find('audio').first().remove();
		startButton.hide();
		resetButton.show();
	  actionCounter = 60;
	  actionInterval = setInterval(function() {
	    actionCounter--;
	    if (actionCounter >= 0) {
	    	document.getElementById("current").innerHTML = "INTERVAL";
	    	document.getElementById("next").innerHTML = "Rest - 10 Seconds";
	      span = document.getElementById("count");
	      span.innerHTML = actionCounter;
	    }
	    if (actionCounter === 0) {
	        //alert('sorry, out of time');
	        clearInterval(actionInterval);
	        audio.append('<audio src="./Audio-Images/beep02.mp3" preload="auto" autoplay></audio>');
	        restTimer();
	    }
	  }, 1000);
	}

	function restTimer() {
		restCounter = 10;
	  restInterval = setInterval(function() {
	    restCounter--;
	    if (restCounter >= 0) {
	    	document.getElementById("current").innerHTML = "REST";
	    	document.getElementById("next").innerHTML = "Interval - 60 Seconds";
	      span = document.getElementById("count");
	      span.innerHTML = restCounter;
	    }
	    if (restCounter === 0) {
	        //alert('sorry, out of time');
	        audio.append('<audio src="./Audio-Images/beep01.mp3" preload="auto" autoplay></audio>');
	        clearInterval(restInterval);
	        actionTimer();
	    }
	  }, 1000);
	}

	$("#start-button").click(function(){
	    actionTimer();
	 });
	
	resetButton.on('click', function() {
		startButton.show();
		resetButton.hide();
		clearInterval(restInterval);
		clearInterval(actionInterval);
		document.getElementById("current").innerHTML = "INTERVAL";
	  document.getElementById("next").innerHTML = "Rest - 10 Seconds";
		span = document.getElementById("count");
		span.innerHTML = 60;
	});

});