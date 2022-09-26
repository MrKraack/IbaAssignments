//Create a form, and when site is reloaded, the form data should still be in text fields
//Get input data from Form
nameInputEl = document.getElementById('inputName');
ageInputEl = document.getElementById('inputAge');
countryInputEl = document.getElementById('inputCountry');

//Store data before unloading page
window.onbeforeunload = function() {
    localStorage.setItem("name", nameInputEl.innerHTML);
    localStorage.setItem("age", ageInputEl.val);
    localStorage.setItem("country", countryInputEl.val);

}
window.onload = function(){
    var getName = localStorage.getItem("name");
    nameInputEl.val = getName; 

}
