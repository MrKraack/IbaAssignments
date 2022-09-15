const btn8El = document.getElementById("btn8").addEventListener('click',startOpgave8)
//Create a "dice"
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;


function startOpgave8(){
    let diceFromUser = Number(prompt("How many times, should the dice be thrown?"));   

    for (let i = 0; i < diceFromUser; i++) {
        let currentHit = ThrowDice();
        switch (currentHit) {
            case 1:
                dice1++;
                break;        
            case 2:
                dice2++;                
                break;
        
            case 3:
                dice3++;
                break;
        
            case 4:
                dice4++;
                
                break;
        
            case 5:
                dice5++;
                
                break;
        
            case 6:
                dice6++;
                
                break;
        
            default:
                break;
        }
    }
    
    console.log(`Dice 1: ${dice1}`);
    console.log(`Dice 2: ${dice2}`);
    console.log(`Dice 3: ${dice3}`);
    console.log(`Dice 4: ${dice4}`);
    console.log(`Dice 5: ${dice5}`);
    console.log(`Dice 6: ${dice6}`);
    
}

function ThrowDice(){
    return Math.round(Math.random()*6)+1;
}