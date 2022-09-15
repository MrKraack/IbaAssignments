btn5El = document.getElementById('opg5Btn').addEventListener('click',printConcertTable);
btn5El2 = document.getElementById('opg5Btn2').addEventListener('click',addBand);

var concertPlan = [
[
    //Day 1
    
    
],
[
    //Day 2
    

],
[
    //Day 3
    
]
];
function printConcertTable(){
    console.table(concertPlan);
}

//Function to add bands
function addBand(){
    // let name = prompt("Name of the band?");
    // let day = prompt ("What day will they play? 1,2,3?");
    // let scene = prompt("What scene? 1-5?");
    // let playtime = prompt("When will they play? Day or night?")
    // let day = Number(prompt("What day will they play? 1,2,3?"));
    
    tempBand = {
        name: prompt("Name of the band?"),
        day: Number(prompt("What day will they play? 1,2,3?")),
        scene:  prompt("What scene? 1-5?"),
        playtime: prompt("When will they play? Day or night?")
    }
    let tDay = tempBand.day;
    
    concertPlan[tDay-1].push(tempBand);
};


