//Change outPut to output
let output = document.getElementById('output');

let string = prompt("string");
console.log(`This is your string: ${string}`);


//Added an argument
const logCombo = (str) => {
  //Changed i+2 to and i,j to 0 from 1
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++) {   

      let newLi = document.createElement('li');
      //removed -1
      newLi.innerHTML = str[i] + str[j];

      //removed j++;

      //Log every li item and then append
      console.log(newLi.innerHTML);
      //moved append inside J loop
      output.append(newLi);
    }
  }
  
}
//Moved logCombo from line 5 to here
logCombo(string);
