const { findSourceMap } = require("module");

function func1(){
    setTimeout(() => {
        return "abc"
    }, 1000);
}

function func2(callback){
    setTimeout(() => {
        callback("abc")
    }, 1000);
}


function func3(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("abc")
            }, 1000);
        })
}

func3().then(data => {
    console.log(data)
})

class Vehicle {
    static vehicleCount = 0
    constructor(type){
        this.type = type;
        Vehicle.vehicleCount++;
    }
}

Vehicle.prototype.print = function(){
    console.log('vehicle is driving');
}

var v1 = new Vehicle('asd');
console.log(Vehicle.vehicleCount)

class Car extends Vehicle {
    constructor(){
        super('Car')
    }
    balanceWheels(){
        console.log('Wheels are balanced')
    }
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car

var c1 = new Car()
c1.print();
c1.balanceWheels();

async function func5(){
    const res1 = await func1();
    const res2 = await func3();
}