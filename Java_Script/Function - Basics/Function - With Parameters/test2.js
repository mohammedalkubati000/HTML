function calcDays(age) {

  "use strict";

  var year = 365;

  return age * year; // 32 * 365

}

var dynamicAge = prompt("Whats Your Age ?");

document.getElementById("test2").innerHTML = calcDays(dynamicAge);




