function convertUseRiyal(){
    
    "use strict";
    var amount = document.getElementById("doollar").value,
        result = amount * 3.75,
        message =document.getElementById("message");
        if(amount === ""){
            message.innerHTML = "This Field Can't Be Empty";
        } else if(isNaN(amount)){
            message.innerHTML = "This Field Accept Only Numbers";
        } else {
            message.innerHTML = amount + " Dollar is " + result + " Riyal";
        }
        
};

/*   Self Invoke
(function convertUseRiyal(amount){
    
    "use strict";

    alert("Welcome To My Website");
})();
*/