const ulEle = document.getElementById("ul1");

const forms = document.querySelector("inputForm");

forms.addEventListener("submit", function (event) {
    event.preventDefault();

    //Get text from 
    let formText = forms[1];
    //code here
    ulEle.appendChild(formText);
});

