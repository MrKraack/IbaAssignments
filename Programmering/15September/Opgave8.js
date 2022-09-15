btn8El = document.getElementById('opg8Btn');
btn8El.addEventListener('click',startOpgave8);

function startOpgave8(){
    //Number to be solved. change to prombp later, using this for testing.
    var numberToSolve = 025464;
    //Convert to string
    var stringNumber = numberToSolve.toString();
    console.log(stringNumber);
    
    let numberArray = stringNumber.split("");

    console.log(numberArray);

    //Check string for even

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0) {
            //If true, then add -     
            console.log(numberArray[i]);
            console.log("It worked!!");
        }        
    }



}