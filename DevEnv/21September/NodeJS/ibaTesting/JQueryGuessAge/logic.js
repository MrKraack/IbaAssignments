var btnTest = document.getElementById("outputText");

$( "input" )
.keyup(function(){
    var textValue = Number($(this).val());
    guessAge(textValue)
}).keyup();

//Function to calculate age
function guessAge(x){
    var thisYear = new Date().getFullYear();
    var userAge = thisYear - x;
    btnTest.innerHTML = `Is this the age you're born?: ${userAge}`;     
}