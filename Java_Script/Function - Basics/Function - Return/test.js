function myInfo() {
    "use strict";
    var myNamee = "Mohamed Al-Kubati",
        myAgee = "32",
        myCountrye = "Yemen",
        myJobe = "Full-Stack Developer",
        myInfo = myNamee + " " + myAgee + " " + myCountrye + " " + myJobe;
    return myInfo ;
}
var myFunction = myInfo();
document.getElementById("test").innerHTML = myFunction;