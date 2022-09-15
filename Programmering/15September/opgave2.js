const btn2El = document.getElementById('soundBtn').addEventListener(`click`,checkSound);

function checkSound(){
let fourD = [[[["hej","farvel"],["mandag","tirsdag"]],[["æble","pære"],["hest","kamel"]]],[[["hvis","sort"],["hus","hotel"]],["femten","seksten","lyd","lys"]]];
let sound = fourD[1][1][2];
let findValue = fourD[0][1][0][1];
console.log(sound);
console.log(findValue);
}