var myCar = {
    colour: "White",
    type: "Sedan",
    price:"50.000",
    model: "2015"
};
var prop;
for (prop in myCar){
    if(myCar.hasOwnProperty(prop)){
    console.log(prop + " : " + myCar[prop]);
}
}