const btn4El = document.getElementById('btn4');
btn4El.addEventListener('click', doCustomCalc)
let wantedCounter = 11;
let counterResult = 0;
//Nummerate through 0 to 10
function doCalculations() {

    for (let index = 0; index < wantedCounter; index++) {
        counterResult = counterResult + index

        console.log(counterResult);


    }
}


//Nummerate from 0 to n
function doCustomCalc(n){
    n = parseInt(prompt("How many loops do you want?"));
    //Since it starts from 0, we need to add 1
    n++;
    
    //Run through 0 to n, and add everything together
    counterResult = 0;
    for (let index = 0; index < n; index++) {
        counterResult = counterResult + index

        console.log(counterResult);


    }


}


