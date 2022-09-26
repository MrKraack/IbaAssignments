//Opgave 1 - extended
// function addFourNumbers(n1: number, n2:number, n3:number, n4:number){
//     return n1 + n2 + n3 + n4;
// };
var _a;
// console.log(addFourNumbers(2,4,6,9));
//Opgave 2 - Push to array
var opg2BtnEl = (_a = document.getElementById("opg2Btn")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startOpgave2);
var temparray = [];
function startOpgave2() {
    var num1 = String(prompt("Enter number one"));
    var num2 = String(prompt("Enter number two"));
    var numSum = num1 + num2;
    temparray.push(numSum);
    printArray();
}
function printArray() {
    for (var i = 0; i < temparray.length; i++) {
        console.log("String: ".concat(temparray[i]));
    }
}
