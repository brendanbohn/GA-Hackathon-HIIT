$(document).ready(function() {

	function restTimer() {
		console.log("rest timer called");
    setTimeout(function(){
		    actionTimer();
	  	}, 5000);
	 }
	 function actionTimer() {
	 		console.log("action timer called");
 	    setTimeout(function(){
 			    restTimer();
 		  	}, 10000);
	 }

	actionTimer();

});