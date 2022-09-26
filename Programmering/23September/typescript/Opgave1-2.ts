//Opgave 1 - extended
// function addFourNumbers(n1: number, n2:number, n3:number, n4:number){
//     return n1 + n2 + n3 + n4;
// };

// console.log(addFourNumbers(2,4,6,9));

//Opgave 2 - Push to array

let opg2BtnEl = document.getElementById("opg2Btn")?.addEventListener('click',startOpgave2)

const temparray : string[] = [];

function startOpgave2(): void{
    let num1 = String(prompt("Enter number one"));
    let num2 = String(prompt("Enter number two"));
    let numSum = num1 + num2;
    temparray.push(numSum);
    printArray();
    
    
}
function printArray(){
    for (let i = 0; i < temparray.length; i++) {
        console.log(`String: ${temparray[i]}`);        
    }
}




