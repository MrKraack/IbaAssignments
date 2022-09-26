var _a;
//Get elements from DOM
var opg4Btn = (_a = document.getElementById('opg4Btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startOpgave4);
function startOpgave4() {
    //Ask user for input
    var userInput = String(prompt("Enter your text"));
    //Split the words
    var userInputSplit = userInput.split(" ");
    //Variable to store the complete acronym
    var completeAcronym = "";
    //Loop through the string, and take the first letter
    for (var i = 0; i < userInputSplit.length; i++) {
        //Get each word 
        var tempData = userInputSplit[i];
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
