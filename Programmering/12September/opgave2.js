//Get elements from DOM
const btn2El = document.getElementById('btn2El');
const diceText = document.getElementById('diceStatus');

btn2El.addEventListener('click', flipCoin);

//Do stuff when btn is clicked

function flipCoin() {
    let diceStatus = Math.round(Math.random() * 5);
    console.log(diceStatus);

    if (diceStatus == 0) {
        diceText.innerHTML = 'you rolled 1'
    } else if (diceStatus == 1) {
        diceText.innerHTML = 'you rolled 2'
    } else if (diceStatus == 2) {
        diceText.innerHTML = 'you rolled 3'
    } else if (diceStatus == 3) {
        diceText.innerHTML = 'you rolled 4'
    } else if (diceStatus == 4) {
        diceText.innerHTML = 'you rolled 5'
    } else {
        diceText.innerHTML = 'you rolled 6'
    }
}



