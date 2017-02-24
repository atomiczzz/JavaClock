//TIMECLOCK FUNCTION
var counter = setInterval(function(){ time() }, 1000);
var time = function(){
	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
  
 if(currentHours < 10){
    currentHours = '0' + currentHours
  };
  
  if(currentMinutes < 10){
    currentMinutes =  '0' + currentMinutes
  };
  
  if(currentSeconds < 10){
    currentSeconds = '0' + currentSeconds
  };

	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

var timer = document.querySelector('#clock');
timer.textContent = currentTimeString;
  
//Time conversion into Hexadecimal
var hexHour = currentHours.toString(16);
var hexMinute = currentMinutes.toString(16);
var hexSec = currentSeconds.toString(16);

 //console.log(hexHour.charAt(1))
var hexString = '#' + hexHour + ':' + hexMinute + ':' + hexSec;
console.log(hexString)
var realHex = '#' +hexHour+hexMinute+hexSec;
  
var hexClock = document.querySelector('#hexTime');
hexClock.textContent = hexString;
var bgChange = document.querySelector('body');
bgChange.style.background = (realHex);
};




