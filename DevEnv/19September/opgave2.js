const btn2El = document.getElementById(`opg2Btn`);
btn2El.addEventListener('click',startOpgave2);

function startOpgave2(){

    //1. Ask user for input
    let userNumber =prompt("Please enter three numbers");
    console.log(userNumber);

    //2. Split input by commas and add to Array
    let numberArray = userNumber.split(",");
    console.log(numberArray);

    //2A. temp Variable used for comparing
    let tempNumber = numberArray[0];

    //3. Loop through array
     for (let i = 0; i < numberArray.length; i++) { 
        //Check if number A is bigger than A+1
        if (tempNumber < numberArray[i+1])
        {
            //3A. Number A is higher than A+1, so continue loop.
            console.log(`${numberArray[i]} is higher than ${numberArray[i+1]}`);
            
        }   
        else if(tempNumber > numberArray[i+1]){
            //3B. Number A is lower than A+1. Make A+1 the new highest
            console.log(`${numberArray[i]} is lower than ${numberArray[i+1]}.
            ${numberArray[i+1]} is now the biggest number`);
            //Setting new highest
            tempNumber = numberArray[i+1];
        }
        else{
            console.log("No more numbers to compare against");
        }
     }


}