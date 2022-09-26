//Get elements from the DOM
//New student
let stNameInputEL = document.getElementById("stNameInput") as HTMLInputElement;
let stClassInputEl = document.getElementById("stClassInput") as HTMLInputElement;
let stInputForm = document.getElementById("newStudentForm");
//Delete student
let stNameDeleteInputEL = document.getElementById("stNameDeleteInput") as HTMLInputElement;
//Search for student
let wantedClassInputEl = document.getElementById("wantedClassInput") as HTMLInputElement;
//Student list
let stUlEl = document.getElementById("studentList");
//Getting data from input fields
//Get data from new student
let stSaveBtnEl = document.getElementById("saveStudentBtn")?.addEventListener('click', function (event) {
    event.preventDefault();
    saveNewStudent();
})
//Get data from wanted class
let wantedClassBtnEl = document.getElementById("wantedClassBtn")?.addEventListener('click', function (event) {
    event.preventDefault();
    getStudentsByClass(wantedClassInputEl.value);
})
//Get data from delete student
let stDelBtnEl = document.getElementById("delStudentBtn")?.addEventListener('click', function (event) {
    event.preventDefault();
    deleteStudents(stNameDeleteInputEL.value);
})

//Student interface
interface IStudent { stName: string, stClass: string };

//Array to store student info
const stArray: IStudent[] = [];

//Function to create new students
function saveNewStudent(): void {
    let tempStudent: IStudent = {
        stName: String(stNameInputEL.value),
        stClass: String(stClassInputEl.value)
    }
    //Push students to array
    stArray.push(tempStudent);
    //Print the array to html 
    studentArrayToHTML(stArray);
}

//function to add students to List (LI)
function studentArrayToHTML(tempArray): void {
    //Clear array, so we don't make duplicates
    stUlEl!.innerHTML = "";

    //Loop through the student array
    for (let i = 0; i < tempArray.length; i++) {
        //Create an li for the student   
        let tempStudentLi = document.createElement("li");
        //Get student from array
        let tempStudentObj = tempArray[i];
        //Add text to li
        tempStudentLi.appendChild(document.createTextNode(`Student Name: ${tempStudentObj.stName} is in class: ${tempStudentObj.stClass}`));
        //Attach li to ul
        stUlEl?.appendChild(tempStudentLi);

    }
}

//Get students from specific class
function getStudentsByClass(wantedClass:string){
    //Clear current view
    stUlEl!.innerHTML="";
    //Array to hold current students
    let studentFromXClass: IStudent[] = [];
    //Run through loop
    for (let i = 0; i < stArray.length; i++) {
        //Check if wantedClass = stClass
        if (wantedClass == stArray[i].stClass) {
            //Add current student to array
            console.log("Yaay, it works");
            studentFromXClass.push(stArray[i]);
            studentArrayToHTML(studentFromXClass);            
        }

    }

}

//Function to delete students
function deleteStudents(delStudentName:string): void {
    //Store name to search for
    let badStudent = delStudentName
    //Check if stName matches deleteName
    for (let i = 0; i < stArray.length; i++) {
        //Check if wantedClass = stClass
        if (badStudent == stArray[i].stName) {
            stArray.slice();            
        }

    }
    studentArrayToHTML(stArray);

    //Get name from input
}

//Bonus not done

// Opgave 5
// •skriv et program med en ‘liste’ til at holde styr på studerendes navn
// og klasse
// •gør det muligt at tilføje studerende til listen
// •hente ud hvilke studerende der er
// •hente studernde for specifik klasse
// •bonus: sorter listerne efter klasse og navn på studerende