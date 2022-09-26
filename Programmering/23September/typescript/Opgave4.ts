//Get elements from DOM
let opg4Btn = document.getElementById('opg4Btn')?.addEventListener('click',startOpgave4);


function startOpgave4(){

    //Ask user for input
    let userInput = String(prompt("Enter your text"));

    //Split the words
    let userInputSplit = userInput.split(" ");

    //Variable to store the complete acronym
    let completeAcronym = "";
    
    //Loop through the string, and take the first letter
    for (let i = 0; i < userInputSplit.length; i++) {
        //Get each word 
        let tempData = userInputSplit[i];
        
        //Split the string apart
        tempData.split("");
        
        //Store and add the letters 
        completeAcronym += tempData[0];
        
        
    }
    //Make everything uppercase and then print to log.
    console.log(completeAcronym.toUpperCase());




    

}


// Opgave 4
// •Skriv et program der kan tage imod en sætning/navn og lave det om 
// til sit akronym. f.eks.:
// •input: portable network graphics
// output: PNG
// •input: three letter acronym
// output: TLA

//How to solve
//Take the first letter after every space
//Add letter to new string
