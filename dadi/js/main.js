const resultElement = document.getElementById("main-title");
const userElement = document.getElementById("user-number");
const computerElement = document.getElementById("computer-number");

const userNumber = prompt("Scegli un numero da 1 a 6");
console.log("la mia scelta :" + userNumber);

// Genera numeri random per il computer
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("il numero del computer :" + computerNumber);

// Stampa i punteggi
userElement.innerText = "Il tuo numero è: " + userNumber;
computerElement.innerText = "Il numero del computer è: " + computerNumber;

// Determina il vincitore
if (userNumber > computerNumber) {
  console.log("Il giocatore vince!");
  resultElement.innerText = "Hai vinto!";
} else if (computerNumber > userNumber) {
  console.log("Il computer vince!");
  resultElement.innerText = "Il computer vinto!";
} else {
  console.log("È un pareggio!");
  resultElement.innerText = "È un pareggio!";
}
