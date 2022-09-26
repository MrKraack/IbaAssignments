//Module for user input
const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let userInput = "Hello world";
// let userOutput = userInput.split("");

readline.question(`What's is your name? `, userInput => {
    console.log(`Your string is: ${userInput}`);
    // console.log(userInput.split(""));
    for (let i = 0; i < userInput.length; i++) {
        console.log(userInput[i])        
    }
    
    readline.close();

});


