const resultElement = document.getElementById("main-title");

// Lista delle email autorizzate
var listaEmailAutorizzate = [
  "utente1@gmail.com",
  "utente2@gmail.com",
  "utente3@gmail.com",
];

// Chiedi all'utente la sua email
var emailUtente = prompt("Inserisci la tua email:");

// Controlla se l'email dell'utente è nella lista autorizzata
if (listaEmailAutorizzate.includes(emailUtente)) {
  console.log("Accesso consentito. Benvenuto!");
  resultElement.innerText = "Accesso consentito. Benvenuto!";
} else {
  console.log("Accesso negato. La tua email non è autorizzata.");
  resultElement.innerText = "Accesso negato. La tua email non è autorizzata.";
}
