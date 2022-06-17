// Traccia del sistema di gioco
console.log("Verrà lanciato un dado per ogni giocatore, il numero più alto vince")

// Dichiarazione variabili utente e CPU
let userNumber;
let computerNumber;

// Calcolo casuale del numero restituito dal lancio del dado
userNumber = Math.round(Math.random() * 6);
console.log("Il tuo lancio ha valore: " + userNumber)
computerNumber = Math.round(Math.random() * 6);
console.log("Il lancio della CPU ha valore: " + computerNumber)

// Dichiarazione variabile messaggio per indicare il risultato
let message;

// Condizione di comparazione tra i numeri risultati dal lancio
if (userNumber > computerNumber){
    message = "HAI VINTO!";
} else if (userNumber == computerNumber){
    message = "Pareggio";
} else {
    message = "Mi dispiace, HAI PERSO!";
}

// Stampa dell'esito della partita in console
console.log(message);