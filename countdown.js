/*
* Original code by Matthew Price
* https://github.com/matthewaprice/Javascript-Countdown-Timer
*
* Forked and modified by Francesco Negri @ Cayenne Italia
* https://github.com/cayenne-digital/Javascript-Countdown-Timer
* 
* v0.2.0 - 2012-03-21
*/

function countdownTimer( end_date, prefix ) {

  if (prefix == null) prefix = "timer_";

  var endDate = new Date(end_date);
  var endTime = (Date.parse(endDate)) / 1000;

  var now = new Date();
  var now = (Date.parse(now) / 1000);

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

function pad(numNumber, numLength){
  var strString = '' + numNumber;
  while(strString.length<numLength){
    strString = '0' + strString;
  }
  return strString;
}
