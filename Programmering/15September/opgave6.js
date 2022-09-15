btn6El = document.getElementById('opg6Btn').addEventListener('click',startOpgave6);

//Hold numbers for the sum
var arrayOfNumbers = [2,3,4,5,5,6,3,5,6,7,3,3];
let sumOfArray = 0;


function startOpgave6(){
    solveArray(arrayOfNumbers);
    console.log(`The sum of all numbers is ${sumOfArray}`);
    
}

function solveArray (tempArray){
    for (let i = 0; i < tempArray.length; i++) {
        sumOfArray += tempArray[i];
    }
}