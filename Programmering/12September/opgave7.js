const btn7El = document.getElementById("btn7").addEventListener('click',startOpgave7)
const target = 100;
let theCount = 1;

function startOpgave7(){
    
    for (let i = 0; i < target; i++) {
        
        if (theCount % 7 != 0) {
            console.log(theCount);
            theCount++;
        }else{
            theCount++;
        }
        
    }
}