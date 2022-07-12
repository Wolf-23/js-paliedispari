/*

let parola = prompt('Inserisci una parola:');
let caratteri = parola.split('');
console.log(caratteri);
reverseParola = caratteri.reverse();
console.log(reverseParola);
let invertita = reverseParola.join('');

if (parola == invertita){
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
}

*/


let parola = prompt('Inserisci una parola:');
let nuovaParola = inverteparola(parola);

if (parola == nuovaParola){
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
}

function inverteparola(stringa) {
    let caratteri = stringa.split('');
    let reverseParola = caratteri.reverse();
    let invertita = reverseParola.join('');
    return invertita;
}

