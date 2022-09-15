//Get elements from DOM
const btnEl = document.getElementById('coinFlip').addEventListener(`click`,flipCoin);
const crownflipsText = document.getElementById('flippedCrowns');

//Store how many times, each side has been hit
let coinFlips = [];
let crownFlips = [];
let otherFlip = [];



function flipCoin (){
    //Find random between 1 and 2.
    let flipStatus = Math.floor(Math.random()*2+1);
    console.log(flipStatus);
    coinFlips.push(flipStatus);
    
    if(flipStatus == 1){
        coinText.innerHTML = 'Got lucky'
        crownFlips.push(flipStatus);
        
    }else{
        coinText.innerHTML = 'Not this time'
        otherFlip.push(flipStatus);
    }
    console.log(`You have rolled the Dice: ${coinFlips.length} times.
    You have rolled Crown: ${crownFlips.length} times.
    You rolled Tails: ${otherFlip.length} times.`)
    
}



