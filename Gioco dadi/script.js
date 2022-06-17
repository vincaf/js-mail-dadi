console.log("Verrà lanciato un dado per ogni giocatore, il numero più alto vince")

let userNumber;
let computerNumber;

userNumber = Math.round(Math.random() * 6);
console.log("Il tuo lancio ha valore: " + userNumber)
computerNumber = Math.round(Math.random() * 6);
console.log("Il lancio della CPU ha valore: " + computerNumber)