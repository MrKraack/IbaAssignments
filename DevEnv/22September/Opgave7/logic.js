//Ask permission to save cookies. e.g. Name, age, hobby
//Bonus: Choose what cookies to save

// Get elements from DOM
let opg7YBtn = document.getElementById('cookieSubmitBtn').addEventListener('click',CookieYesPermission);
let opg7clearBtn = document.getElementById('cookieClearBtn').addEventListener('click',deleteCoookies);

//Clear cookies
function deleteCoookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function CookieYesPermission() {
    //If the user says yes
    console.log("Wuhuuu COOKIES!!!");
    whichCookies();


}
function CookieNoPermission() {
    //if the user says No
    console.log("NO COOKIES FOR YOU")

}

//Returns true if pressed yes
if (confirm("Can we store cookies?")) {
    // CookieYesPermission();
} else {
    // CookieNoPermission();
}

//Ask for which cookies can be stored.
function whichCookies() {
    let radios = document.getElementsByName(`choice`)
    let val = "";

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
        }
        switch (val) {
            case "Name":
                document.cookie = "name=Kapper";
    
                break;
    
            case "Gender":
                document.cookie = "gender=Male";
    
                break;
    
            case "Age":
                document.cookie = "age=26"
    
                break;
    
            case "Hobbies":
                document.cookie = "Hobby=Coding";
    
                break;
    
            default:
                break;
        }

    }
    console.log(document.cookie);
}


