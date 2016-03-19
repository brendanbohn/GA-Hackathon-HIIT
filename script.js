$(document).ready(function() {
	function actionTimer(){
	  var actionCounter = 10;
	  setInterval(function() {
	    actionCounter--;
	    if (actionCounter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = actionCounter;
	    }
	    if (actionCounter === 0) {
	        //alert('sorry, out of time');
	        clearInterval(actionCounter);
	        restTimer();
	    }
	  }, 1000);
	}

	function restTimer() {
		var restCounter = 5;
	  setInterval(function() {
	    restCounter--;
	    if (restCounter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = restCounter;
	    }
	    if (restCounter === 0) {
	        //alert('sorry, out of time');
	        clearInterval(restCounter);
	        actionTimer();
	    }
	  }, 1000);
	}

	$("#startClock").click(function(){
	    actionTimer();
	 });
});