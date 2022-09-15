btn4El = document.getElementById("opg4Btn").addEventListener('click', startOpgave4);

function startOpgave4(){

    let randomObject = {
        returnSum: function(x,y){
            return x+y;
        },
        returnMultiply(x,y){
            return x*y;
        }

        
    }
    console.log(randomObject.returnSum(4,2));
    console.log(randomObject.returnMultiply(4,2));



}