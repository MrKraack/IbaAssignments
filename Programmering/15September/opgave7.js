//Assign form as a variable
var movieData = document.getElementById('movieForm')
movieData.addEventListener('submit',function(e){
    e.preventDefault();
    createMovieObject();

});


//Create movie object
function createMovieObject(){    

    //Template for Movie object
    var tempMovieObject = {
        name: movieData.mveTitel.value,
        instructor: movieData.mveInstructor.value,
        year: movieData.mveYear.value,
        actors: movieData.mveActors.value.split(",")

    }

    //Spaghetti debug
    console.log(tempMovieObject);  

    //Add movie object to list
    addToList(tempMovieObject);

}

//Get unordered list an a variable
ulEl = document.getElementById('movieList');

//ID Counter for li elements
let listItemID = 1;

//Functin to add items to list
function addToList(mObject){
    //Create a LI element
    let listNode = document.createElement('li');
    //Give the li an ID
    listNode.setAttribute("id",`movie${listItemID}`);
    
    //
    listNode.appendChild(document.createTextNode(`ID: ${listItemID} - Movie name: ${mObject.name} - Instructor: ${mObject.instructor} - Age: ${mObject.year} - Actors: ${mObject.actors} `));

    // document.querySelector('ul').appendChild(listNode);
    ulEl.appendChild(listNode);
    listItemID++;
}

//Assign deleteForm as a variable
var deleteData = document.getElementById('deleteForm')
deleteData.addEventListener('submit',function(e){
    e.preventDefault();
    deleteFromList(deleteForm.liDelete.value);
    

});
function deleteFromList(listID){
    //Find Li by ID
    liToDelete = document.getElementById(`movie${listID}`);
    //Delete LI from parent node
    liToDelete.parentNode.removeChild(liToDelete);

}
