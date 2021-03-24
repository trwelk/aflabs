const fetch = require("node-fetch");

var fun1 = function(){
    console.log('Hello world')
}

var fun2 = function(func){
    func();
}

fun2(fun1);

var obj1 = {
    name:"Trewon",
    age:21,
    speak:() => {
        console.log("Hi world")
    }
}

var vehicleName = "someName";
var printVehicleName = function(){
    console.log(vehicleName)
}


var vehcile = {
    vehicleName: "anotherName",
    getVehicleName:printVehicleName
    
}

vehcile.getVehicleName()

function getTax(taxPerc){
    
    function retFunc(amount) {
        console.log(amount + (amount * taxPerc))
        return (amount + (amount * taxPerc));
    }
    return retFunc
}

var innerFunc = getTax(10)
console.log(innerFunc(100))


function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(json => {
            return json;
        })
}

getUsers()