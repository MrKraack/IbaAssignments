//Get text placeholder on the site 
let cookieTextPrint = document.getElementById("myCookieText");
//create cookie
document.cookie = "name=Senpai; catchPhrase=BONZAI!";

function getCookie(cname) {

    //Placeholder for cookieName
    let name = cname + "=";

    let coookie = document.cookie;
    //Print every cookie

    let cookieArray = coookie.split(";");
    console.log(cookieArray);
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Replace text placeholder with cookie string
cookieTextPrint.innerHTML = getCookie("name");

//Call function - remember to console log
console.log(getCookie("name"));
