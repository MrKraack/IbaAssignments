let textOutput = document.getElementById('wordForLetter');
const btnForPrompt = document.getElementById('btn3');
btnForPrompt.addEventListener('click', askUser)

function askUser() {
    let chosenLetter;
    chosenLetter = prompt("Enter your letter")

    switch (chosenLetter) {
        case "a":
            textOutput.innerHTML = 'Abe'

            break;
        case "b":
            textOutput.innerText = "Baboon"

            break;
        case "c":
            textOutput.innerText = "Cow"

            break;
        case "d":
            textOutput.innerText = "Dog"

            break;
        case "e":

            textOutput.innerText = "Elephant"
            break;
        case "f":
            textOutput.innerText = "Fish"
            break;
        case "g":
            textOutput.innerText = "Goat"
            break;
        case "h":
            textOutput.innerText = "hen"
            break;
        case "i":
            textOutput.innerText = "Ice"
            break;
        case "j":
            textOutput.innerText = "Jurassic"

            break;

        default:
            break;
    }
}