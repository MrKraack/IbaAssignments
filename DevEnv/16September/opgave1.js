//Assignment 1 - Array with 3 objects. Each object has a greeting. Write to log

//Get button element
btn1El = document.getElementById('opg1Btn').addEventListener('click', startOpgave1)

function startOpgave1(){
var objectArray = [];

//create the objects
let greetObject1 = {
    name: "Kakashi Hatake",
    greeting: "Konnichiwa",
    sayHi: function(){
        console.log(`${this.greeting} watashi no wa ${this.name}`);
    },
}

let greetObject2 = {
    name: "James",
    greeting: "Well Hello there",
    sayHi: function(){
        console.log(`${this.greeting} my name is ${this.name}`);
    },
}
let greetObject3 = {
    name: "Wing Zhao",
    greeting: "Nǐ hǎo",
    sayHi: function(){
        console.log(`${this.greeting} wǒ de míngzì shì ${this.name}`);
    },
}

    //Push the objects into the array
    objectArray.push(greetObject1,greetObject2,greetObject3);

    //Loop through every objects
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].sayHi();        
    }
    
}

