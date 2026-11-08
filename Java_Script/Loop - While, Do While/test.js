var i = 5;
while(i<=10){
    console.log(i);
    i++;
}
//do
var i = 0;
do {
    console.log(i);
    i++;
} while(i<=10)
//
function generateYears(Start, End) {
    
    "use strict";
    
    var years = Start;
    
    document.write("<select>");
    
    while (years <= End) {
        
        document.write("<option value=\"" + years + "\">" + years + "</option>");
        
        years++;
        
    }
    
    document.write("</select>");
    
}

generateYears(1900, 2025); 

generateYears(1950, 2010); 
