/*
var i =0;
for(;;){
    if(i>10)break;
    console.log(i);
    i++;
}
*/
function generateYears(Start, End){
    "use strict";
    var years;
    document.write("<select>");
    for(years = Start; years <= End; years++){
        //document.write("<option>"  + years + "</option>");
          document.write("<option value='" + years + "'>"  + years + "</option>");
    }
    document.write("</select>");
}
//generateYears(1900, 2015);
//generateYears(1700, 2026);

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);