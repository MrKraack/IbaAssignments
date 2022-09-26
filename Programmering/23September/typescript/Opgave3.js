//Get Elements
var nameInputEl = document.getElementById("nameInput");
var ageInputEl = document.getElementById('ageInput');
var radioInputEl = document.getElementById('activeInput');
var ulEl = document.getElementById('listOfPeople');
var saveBtnEl = document.getElementById('saveBtn').addEventListener('click', function (event) {
    event.preventDefault();
    savePersonInfo();
});
//Array to store info
var personArray = [];
;
//Save User info and store in Array
function savePersonInfo() {
    console.log("SavePerson function is running");
    //Create person from data
    if (radioInputEl.checked) {
        console.log("Active is checked");
        var tempObj = {
            name: String(nameInputEl.value),
            age: Number(ageInputEl.value),
            active: Boolean(true)
        };
        //Push to array    
        personArray.push(tempObj);
        //output object
        console.log(tempObj);
        printArrayToScreen();
    }
    else {
        console.log("Radio is NOT checked");
        var tempObj = {
            name: String(nameInputEl.value),
            age: Number(ageInputEl.value),
            active: Boolean(false)
        };
        //Push to array    
        personArray.push(tempObj);
        //output object
        console.log(tempObj);
        printArrayToScreen();
    }
}
//Print objects from Array
function printArrayToScreen() {
    //Clear the current ul, so we don't get duplicates
    ulEl.innerHTML = "";
    //For every item in array, add to screen
    for (var i = 0; i < personArray.length; i++) {
        var tempLI = document.createElement("li");
        console.log(personArray[i].name);
        var tempObj = personArray[i];
        tempLI.appendChild(document.createTextNode("".concat(tempObj.name, " is ").concat(tempObj.age, " years old and is he active: ").concat(tempObj.active)));
        ulEl === null || ulEl === void 0 ? void 0 : ulEl.appendChild(tempLI);
    }
}
// •skriv et program der beder brugeren om input til at udfylde n
// objekter der gemmes i et array.
// •objekterne skal være af typen {name: string, age: number, active:
// boolean}
// •output derefter objekternes indhold på siden eller i konsollen i
// formatet “name is age  years old and active/inactive”
