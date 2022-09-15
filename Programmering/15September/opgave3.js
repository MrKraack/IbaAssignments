const btn3El = document.getElementById('personBtn').addEventListener(`click`,printHuman);

function printHuman(){

    let randomPerson = {
        fornavn: "Bruce",
        efternavn: "Lee",
        alder: 42,
        eyeColor: "brown",
        sayHi: function(msg){
            console.log(msg);
        },
        introduce: function(){
            console.log(this.fornavn);
        }
    }
    
    console.log(`${randomPerson.fornavn} ${randomPerson.efternavn} er ${randomPerson.alder} år gammel og har ${randomPerson.eyeColor} øjne`);
    randomPerson.sayHi("Hello world");
    randomPerson.introduce();

}