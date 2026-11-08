var yourAge = prompt("What Your Age? ");

if (yourAge < 18){
    document.getElementById('test').innerHTML =
        "Sorry Your Age Is " + yourAge + " You  are Not Allowed Here";
}else{
    document.getElementById('test').innerHTML = 
        "Hello Your Age Is " + yourAge + " You Are Welcome Here";
}