//Get elements from DOM
const btnEl = document.getElementById('coinFlip');
const coinText = document.getElementById('coinStatus');
const crownflipsText = document.getElementById('flippedCrowns');
let crownFlips = 0;

btnEl.addEventListener('click',flipCoin);

//Do stuff when btn is clicked

function flipCoin (){
    let flipStatus = Math.round(Math.random()*2+1);
    coinText.innerHTML = "Coin has been flipped";
    console.log(flipStatus);
    crownflipsText.innerHTML = `You have flipped ${crownFlips} crowns`;
    
    if(flipStatus == 1){
        coinText.innerHTML = 'Got lucky'
        crownFlips++
        
    }else{
        coinText.innerHTML = 'Not this time'
    }
    
}



