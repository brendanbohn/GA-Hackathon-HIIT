$(document).ready(function() {

	function restTimer() {
		console.log("rest timer called");
		secondsCounter();
		fullRest();
	 }

	 function actionTimer() {
	 		console.log("action timer called");
 	    setTimeout(function(){
 			    restTimer();
 		  	}, 10000);
	 }

	 function fullRest() {
	 		console.log("full rest timer");
	 	  setTimeout(function(){
		    actionTimer();
	  	}, 5000);
	 }

	 function secondsCounter() {
	 	var s = 0;
	 	console.log("seconds counter");
 	  setTimeout(function(){
 	  	s = s+1;
	    console.log(s);
  	}, 1000);
	 }

	restTimer();

});