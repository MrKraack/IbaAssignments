//Get text placeholder
let txtPlaceholder = document.getElementById("namePlaceholder");
let hobbyPlaceholder = document.getElementById("hobbyPlaceholder");


//Add eventListener to Btn
btnEl = document.getElementById("deleteBtn").addEventListener('click', deletePerson);
createBtnEl = document.getElementById("createBtn").addEventListener('click', createPerson);


//Assign sessionData to data variable
let tempData = localStorage.getItem("name");
let hobbyToText = localStorage.getItem("Hobby");

//Set textholders = to text from storage
txtPlaceholder.innerHTML = (`Well hello there ${tempData}`);
hobbyPlaceholder.innerText = (`WHAT! Is your hobby: ${hobbyToText}?, That's also my hobby`);

//Ask for name -- opgave 3 --- Ask for hobby opgave 4
function createPerson() {
    tempName = prompt("What's your name?");
    localStorage.setItem("name", tempName);
    tempHobby = prompt("What's your hobby?");
    localStorage.setItem("Hobby", tempHobby);
    location.reload();

}

//Delete name
function deletePerson() {
    localStorage.clear();
    location.reload();

}