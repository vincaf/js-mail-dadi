// Inizializzazione array con mail approvate
const mailApproved = [ "tizio@gmail.com", "caio@gmail.com", 'sempronio@gmail.com'];
console.log(mailApproved);

// Inizializzazione variabile di mail inserita dall'utente
const userMail = prompt('inserisci una mail');
console.log("Questa è la mail che hai inserito " + userMail);

// Inizializzazione variabile di verifica e messaggio
let mailVerified = false;
let message;

// Apertura ciclo per verificare la mail inserita con quelle approvate
for (let i = 0; i < mailApproved.length ; i++){
    const element = mailApproved[i];

    // Condizione per verificare se la mail inserita corrisponde a quelle approvate
    if ( userMail === element ){
        mailVerified = true;
        message = "Accesso approvato";
    } else {
        message = "Accesso negato - mail non autorizzata";
    }

    // Stampare in console esito del controllo
    console.log(message);
}


