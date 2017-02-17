//TIMECLOCK FUNCTION
var timez = document.querySelector('#clock');
var timez = function(){
	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	document.getElementById("clock").innerHTML = currentTimeString;
}

//var timez = document.querySelector('#clock');