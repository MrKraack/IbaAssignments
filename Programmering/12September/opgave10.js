const btn10El = document.getElementById('btn10').addEventListener('click',startOpgave10);
 

function startOpgave10(){

    //Get number from user
    let userNumber = Number(prompt("Enter your desired number - N"));
    let sumOfAdding = 0;

    for (let i = 0; i < userNumber+1; i++) {

        sumOfAdding += i;
        
        console.log(`You entered Number: ${userNumber}.
        Current number is ${i},
        Everything adds up to ${sumOfAdding}`)
    }


}