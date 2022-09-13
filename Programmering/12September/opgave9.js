const btn9El = document.getElementById('btn9').addEventListener('click', startOpgave9);

let numberCounter = 1;

function startOpgave9(){

    for (let i = 0; i < 100; i++) {

        if(numberCounter % 5 == 0 && numberCounter % 3 == 0){
            console.log("FizzBuzz");
            numberCounter++;
        }
        else if(numberCounter % 5 == 0){
            console.log("Buzz");
            numberCounter++;

        }else if( numberCounter % 3 == 0){
            console.log("Fizz");
            numberCounter++;

        }else{
            console.log(numberCounter);
            numberCounter++;
        }
    }
}