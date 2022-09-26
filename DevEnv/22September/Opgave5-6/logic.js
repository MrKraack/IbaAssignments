//Get text elements
let btnEl = document.getElementById(`createBtn`).addEventListener(`click`, createCoookie);
let btn2El = document.getElementById(`deleteBtn`).addEventListener(`click`, deleteCoookies);
let cookieBtnEl = document.getElementById(`cookieBtn`).addEventListener(`click`, startOpgave6);
let nameEl = document.getElementById(`namePlaceholder`);

//Opgave 5 - Create cookies and check name 
function createCoookie() {
    if (document.cookie.indexOf('name') == -1) {
        tempName = prompt("What's your name?");
        document.cookie = `name=${tempName}`;
    } else {
        alert("You already have a name");
    }
}

function deleteCoookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


//Opgave 6 - Function to save cookies 
function startOpgave6() {
    let keey = prompt("Name of the key?");
    let valuee = prompt("What's the value?");
    let expiire = prompt("Days until cookie expire");
    saveTheCookies(keey, valuee, expiire);
}

function saveTheCookies(cKey, cValue, cExpire) {
    console.log("Function SaveTheCookies");
    var cTempExp = new Date();
    cTempExp.setTime(cTempExp.getTime() + cExpire * 24 * 60 * 60 * 1000);
    let cookieExpire = "expires=" + cTempExp.toUTCString();

    document.cookie = `${cKey}=${cValue}; ${cookieExpire}`
    console.log(document.cookie);
}

//Name - Value - Days in interger
// saveTheCookies("name", "The champ", 4);
