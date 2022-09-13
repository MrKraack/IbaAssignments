const btn5El = document.getElementById('btn5');
//Variable for countdown target
let countdownTarget;
//Add listener and activate script
btn5El.addEventListener('click',letsCountdown);


//Countdown from n
function letsCountdown(n){
    countdownNumber = parseInt(prompt("Where should the countdown begin?"));
    countdownTarget = countdownNumber + 1;
    for (let i = 0; i < countdownTarget; i++) {
        
        if (countdownNumber == 0) {
            console.log("GO CRAZY!!!");
            
        } else {
            console.log(countdownNumber)
            countdownNumber--;
            
        }
    }
        
}
