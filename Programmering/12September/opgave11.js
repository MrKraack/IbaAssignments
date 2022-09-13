const btn11El = document.getElementById("btn11").addEventListener('click', startOpgave11);

function startOpgave11(){
    //Ask the user for a number and it's exponent
    let uNumber = Number(prompt("What number do you want?"));
    let uExponent = Number(prompt("What exponent?"));

    console.log(exponent(uNumber, uExponent));
    
}
//Keep multiplying until the exponet/n has reached 0
let exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};