let scelta = prompt('Scegli tra pari e dispari:');

let numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));

let min = 0;
let max = 5;


let numeroPc = numRandom(min, max);
let sommaNumeri = numero + numeroPc;
alert(`La somma è ${sommaNumeri}`);
console.log(numero, numeroPc, sommaNumeri, numRandom(min, max));

let pariDispari = controllo(sommaNumeri);

if (scelta.toUpperCase() == pariDispari.toUpperCase()) {
    alert('Hai Vinto!')
} else {
    alert('Ha vinto il computer!')
}

function numRandom (min, max) {
    let RandomNumber = Math.floor(Math.random() * max) + min;
    return RandomNumber;
};

function controllo (ctrl) {
    if (ctrl % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
};