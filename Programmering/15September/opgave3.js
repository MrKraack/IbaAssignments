const btn3El = document.getElementById('personBtn').addEventListener(`click`,printHuman);

function printHuman(){

    let randomPerson = {
        fornavn: "Bruce",
        efternavn: "Lee",
        alder: 42,
        eyeColor: "brown"
    }
    
    console.log(`${randomPerson.fornavn} ${randomPerson.efternavn} er ${randomPerson.alder} år gammel og har ${randomPerson.eyeColor} øjne`);
}