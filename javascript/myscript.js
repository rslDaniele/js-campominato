// REGOLE DEL GIOCO
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var win = 1; // variabile vittoria o sconfitta user

var numeri = []; // Variabile d'appoggio da usare come array per i numeri generati

var numeriUtente = []; // array dei numeri scelti dall'utente

var chances; // possibilità di entries dell'user (100 - 16)

var sceltaUser; // numeri inseriti in prompt dal giocatore

var punteggio; //punti fatti dal giocatore
// scelta difficoltà partita

var difficolta = parseInt(prompt("Scegli la difficolta 1(facile), 2(media), 3(difficile)"));

if (difficolta === 1) {
  chances = 84;
  alert("Iniziamo con calma")
}else if (difficolta === 2) {
  chances = 64;
  alert("Ti piacciono le sfide?")
}else {
  chances = 34;
  alert("Wow, hardcore!")
}

// Dichiarazione funzione che genera i 16 numeri
if (difficolta === 1) {
  function generaNum() {
    while (numeri.length < 16) {
      var numeroGen = Math.floor(Math.random() * 100) + 1;
      console.log("numero estratto", numeroGen )
      if (!numeri.includes(numeroGen)) { // regola per far si che nell'array non ci siano doppioni

      numeri.push(numeroGen); // funzione che mette i numeri generati nell'array
      }
    }
  }
}else if (difficolta === 2) {
  function generaNum() {
    while (numeri.length < 16) {
      var numeroGen = Math.floor(Math.random() * 80) + 1;
      console.log("numero estratto", numeroGen )
      if (!numeri.includes(numeroGen)) { // regola per far si che nell'array non ci siano doppioni

      numeri.push(numeroGen); // funzione che mette i numeri generati nell'array
      }
    }
  }
}else {
  function generaNum() {
    while (numeri.length < 16) {
      var numeroGen = Math.floor(Math.random() * 50) + 1;
      console.log("numero estratto", numeroGen )
      if (!numeri.includes(numeroGen)) { // regola per far si che nell'array non ci siano doppioni

      numeri.push(numeroGen); // funzione che mette i numeri generati nell'array
      }
    }
  }
}


generaNum(); // Comando per eseguire la funzione
console.log(numeri);

if (difficolta === 1) {
  document.getElementById('play').addEventListener("click",function giochiamo() { while (win === 1 && numeriUtente.length <= chances ) {

    sceltaUser = parseInt(prompt("Scegli un numero da 1 a 100"));
    console.log(sceltaUser);

    if (numeri.includes(sceltaUser)) {
      win = 0;
      console.log("hai perso");
    } else if (sceltaUser < 1) {
      alert("inserisci un numero da 1 a 100")
    } else if (sceltaUser > 100 ) {
      alert("inserisci un numero da 1 a 100")
    } else if (numeriUtente.includes(sceltaUser)) {
      alert("numero già inserito");
    } else {
      numeriUtente.push(sceltaUser)
    }
  }
  } );

}else if (difficolta === 2) {
  document.getElementById('play').addEventListener("click",function giochiamo() { while (win === 1 && numeriUtente.length <= chances ) {

    sceltaUser = parseInt(prompt("Scegli un numero da 1 a 80"));
    console.log(sceltaUser);

    if (numeri.includes(sceltaUser)) {
      win = 0;
      console.log("hai perso");
    } else if (sceltaUser < 1) {
      alert("inserisci un numero da 1 a 80")
    } else if (sceltaUser > 80 ) {
      alert("inserisci un numero da 1 a 80")
    } else if (numeriUtente.includes(sceltaUser)) {
      alert("numero già inserito");
    } else {
      numeriUtente.push(sceltaUser)
    }
  }
  } );
}else {
  document.getElementById('play').addEventListener("click",function giochiamo() { while (win === 1 && numeriUtente.length <= chances ) {

    sceltaUser = parseInt(prompt("Scegli un numero da 1 a 50"));
    console.log(sceltaUser);

    if (numeri.includes(sceltaUser)) {
      win = 0;
      console.log("hai perso");
    } else if (sceltaUser < 1) {
      alert("inserisci un numero da 1 a 100")
    } else if (sceltaUser > 50 ) {
      alert("inserisci un numero da 1 a 50")
    } else if (numeriUtente.includes(sceltaUser)) {
      alert("numero già inserito");
    } else {
      numeriUtente.push(sceltaUser)
    }
  }
  } );
}
