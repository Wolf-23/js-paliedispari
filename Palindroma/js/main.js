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
    let stringaArray = stringa.split('');
    let stringaReverse = '';
    for (let x = stringa.length - 1; x >= 0; x--) {
        stringaReverse += stringaArray[x];
    }
    return stringaReverse;

}
