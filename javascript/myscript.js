// REGOLE DEL GIOCO
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Dichiarazione funzione che genera i 16 numeri

function generaNum() {
  for (var i = 0; i < 16; i++) {
  var numeroGen = Math.floor(Math.random() * 100);
  console.log("numeri estratti", numeroGen )
  numeri.push(numeroGen); //funzione che mette i numeri generati nell'array
  }
}


var numeri = []; // Variabile d'appoggio da usare come array per i numeri generati

generaNum(); // Comando per eseguire la funzione
console.log(numeri);

// Chidiamo all'utente di inserire 16 numeri tra 1 e 100

var sceltaUser = prompt("Scegli un numero da 1 a 16");
console.log(sceltaUser);

// Controlliamo se il numero scelto è nell'array

var win = 1;

for (var i = 0; i < numeri.length; i++) {
  var numeroCheck = numeri[i];
  console.log("esecuzione ciclo per", numeroCheck)

  if (numeroCheck == sceltaUser) {
    win = 0;
  }
}

if (win == 0) {
  console.log("hai perso!")
} else {
  console.log("andiamo avanti!")
}
