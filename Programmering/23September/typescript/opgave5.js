var _a, _b, _c;
//Get elements from the DOM
//New student
var stNameInputEL = document.getElementById("stNameInput");
var stClassInputEl = document.getElementById("stClassInput");
var stInputForm = document.getElementById("newStudentForm");
//Delete student
var stNameDeleteInputEL = document.getElementById("stNameDeleteInput");
//Search for student
var wantedClassInputEl = document.getElementById("wantedClassInput");
//Student list
var stUlEl = document.getElementById("studentList");
//Getting data from input fields
//Get data from new student
var stSaveBtnEl = (_a = document.getElementById("saveStudentBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    saveNewStudent();
});
//Get data from wanted class
var wantedClassBtnEl = (_b = document.getElementById("wantedClassBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
    event.preventDefault();
    getStudentsByClass(wantedClassInputEl.value);
});
//Get data from delete student
var stDelBtnEl = (_c = document.getElementById("delStudentBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (event) {
    event.preventDefault();
    deleteStudents(stNameDeleteInputEL.value);
});
;
//Array to store student info
var stArray = [];
//Function to create new students
function saveNewStudent() {
    var tempStudent = {
        stName: String(stNameInputEL.value),
        stClass: String(stClassInputEl.value)
    };
    //Push students to array
    stArray.push(tempStudent);
    //Print the array to html 
    studentArrayToHTML(stArray);
}
//function to add students to List (LI)
function studentArrayToHTML(tempArray) {
    //Clear array, so we don't make duplicates
    stUlEl.innerHTML = "";
    //Loop through the student array
    for (var i = 0; i < tempArray.length; i++) {
        //Create an li for the student   
        var tempStudentLi = document.createElement("li");
        //Get student from array
        var tempStudentObj = tempArray[i];
        //Add text to li
        tempStudentLi.appendChild(document.createTextNode("Student Name: ".concat(tempStudentObj.stName, " is in class: ").concat(tempStudentObj.stClass)));
        //Attach li to ul
        stUlEl === null || stUlEl === void 0 ? void 0 : stUlEl.appendChild(tempStudentLi);
    }
}
//Get students from specific class
function getStudentsByClass(wantedClass) {
    //Clear current view
    stUlEl.innerHTML = "";
    //Array to hold current students
    var studentFromXClass = [];
    //Run through loop
    for (var i = 0; i < stArray.length; i++) {
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
function deleteStudents(delStudentName) {
    //Store name to search for
    var badStudent = delStudentName;
    //Check if stName matches deleteName
    for (var i = 0; i < stArray.length; i++) {
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
