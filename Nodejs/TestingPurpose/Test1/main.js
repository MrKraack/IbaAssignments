var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log("--- Testing initiated ---");
console.log(data.toString());
console.log("--- Testing ended ---");