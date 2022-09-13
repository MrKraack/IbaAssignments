btn6El = document.getElementById("btn6").addEventListener('click',startOpgave6)

const questions = ["What's your name?",
"What's 2+2?",
"What's your favourite colour?",
"How you doing?",
"Am I a robot",
"Who's cute?",
"Can you speak japanese?",
"How old are you",
"What's your gender?",
"Are you real"
];

function startOpgave6(){
let userQuestions = prompt("What's your question for the robot?");
switch (userQuestions) {
    case questions[0]:
        console.log("My name is Mr.Robotto")
        
        break;

    case questions[1]:
        console.log("The answer is 4")
        
        break;

    case questions[2]:
        
        break;

    case questions[3]:
        
        break;

    case questions[4]:
        
        break;

    case questions[5]:
        
        break;

    case questions[6]:
        
        break;

    case questions[7]:
        
        break;

    case questions[8]:
        
        break;

    case questions[9]:
        
        break;

    default:
        break;
    }
}