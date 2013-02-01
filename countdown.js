/*
* Original code by Matthew Price
* https://github.com/matthewaprice/Javascript-Countdown-Timer
*
* Forked and modified by Francesco Negri @ Cayenne Italia
* https://github.com/cayenne-digital/Javascript-Countdown-Timer
* 
* v0.2.0 - 2012-03-21
*/

var offset = 0;

function countdownTimer( end_date, offset, prefix ) {

  if (offset == null) offset = 0;
  if (prefix == null) prefix = "timer_";

  var endTime = Date.parse(new Date(end_date)) / 1000;

  var now = (Date.parse(new Date()) - offset) / 1000;

  var timeLeft = endTime - now;
  timeLeft = (timeLeft > 0) ? timeLeft : 0;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (document.getElementById(prefix+'days')) {
    document.getElementById(prefix+'days').innerHTML = days;
  } else {
    hours += 24 * days;
  }

  if (document.getElementById(prefix+'hours')) {
    document.getElementById(prefix+'hours').innerHTML = pad(hours,2);
  } else {
    minutes += 60 * hours;
  }

  if (document.getElementById(prefix+'minutes')) {
    document.getElementById(prefix+'minutes').innerHTML = pad(minutes,2);
  } else {
    seconds += 60 * minutes;
  }

  if (document.getElementById(prefix+'seconds')) {
    document.getElementById(prefix+'seconds').innerHTML = pad(seconds,2);
  }

}

function pad(numNumber, numLength) {
  var strString = '' + numNumber;
  while(strString.length<numLength){
    strString = '0' + strString;
  }
  return strString;
}

function findOffset(serverDate) {
  var clock = Date.parse(new Date());
  var server = Date.parse(new Date(serverDate));
  var offset = clock - server;
  return offset;
}
