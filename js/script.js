
/*  Chiedo all'utente di inserire i suoi dati, che verranno salvati */

const nome = prompt("Inserisci il tuo nome");

const cognome = prompt("Inserisci il tuo cognome");

const favoriteColor = prompt("Inserisci il tuo colore preferito");

/* Inserisco i dati dell'utente all'interno dell'apposito span tramite ID*/ 

document.getElementById("nome").innerHTML = nome;

document.getElementById("cognome").innerHTML = cognome;

document.getElementById("fav-color").innerHTML = favoriteColor;