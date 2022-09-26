//define the queens
let queenOne = { x: 5, y: 7 };
let queenTwo = { x: 3, y: 6 };

//Checking for straight lines
//Is x or y the same on both queens?
function checkStraightLines(q1, q2) {

    if (queenOne.x == queenTwo.x || queenOne.y == queenTwo.y) {
        console.log("MATE!")

    }
    else {
        console.log("Can't hit on straight lines");
    }
}

//Checking for directional lines
function checkDiagonalLines(){

}







// Opgave 6
// •skriv et program til at tjekke om to dronninger kan tage hinanden på
// et 8x8 skakbræt
// •gør det muligt at tjekke for hvilke som helst to positioner (input fra
// brugeren)
