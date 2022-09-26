//Get Elements
let nameInputEl = document.getElementById(`nameInput`) as HTMLInputElement;
let ageInputEl = document.getElementById('ageInput') as HTMLInputElement;
let radioInputEl = document.getElementById('activeInput') as HTMLInputElement;
let ulEl = document.getElementById('listOfPeople');
let saveBtnEl = document.getElementById('saveBtn')!.addEventListener('click', function(event){
    event.preventDefault();
    savePersonInfo();
});

//Array to store info
const personArray: IPerson[] = [];

//Define interface
interface IPerson { name: string, age: number, active?: boolean };

//Save User info and store in Array
function savePersonInfo(): void {
    console.log("SavePerson function is running")
    //Create person from data
    if (radioInputEl.checked) {
        console.log("Active is checked");
        
        let tempObj: IPerson =
        {
            name: String(nameInputEl.value),
            age: Number(ageInputEl.value),
            active: Boolean(true)
        }
        //Push to array    
        personArray.push(tempObj);
        //output object
        console.log(tempObj);
        printArrayToScreen();
    }
    else {
        console.log("Radio is NOT checked");
        
        let tempObj: IPerson =
        {
            name: String(nameInputEl.value),
            age: Number(ageInputEl.value),
            active: Boolean(false)
        }
        //Push to array    
        personArray.push(tempObj);
        //output object
        console.log(tempObj);
        printArrayToScreen();

    }  

}

//Print objects from Array
function printArrayToScreen(){
    //Clear the current ul, so we don't get duplicates
    ulEl!.innerHTML = "";
    //For every item in array, add to screen
    for (let i = 0; i < personArray.length; i++) {
        let tempLI = document.createElement("li");
        console.log(personArray[i].name);
        let tempObj = personArray[i];
    
        tempLI.appendChild(document.createTextNode(`${tempObj.name} is ${tempObj.age} years old and is he active: ${tempObj.active}`));      
        ulEl?.appendChild(tempLI);
        


    }
}






















// •skriv et program der beder brugeren om input til at udfylde n
// objekter der gemmes i et array.

// •objekterne skal være af typen {name: string, age: number, active:
// boolean}

// •output derefter objekternes indhold på siden eller i konsollen i
// formatet “name is age  years old and active/inactive”