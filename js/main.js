// Richiedere quanti km il cliente deve percorrere
// Richiedere l'età del cliente
// Prezzo del biglietto: 0.21€ al km
// Sconto del 20% per i minorenni
// Sconto del 40% per gli over 65
// Calcolare il prezzo finale del biglietto
// Nell'output dovranno essere inseriti solo 2 decimali per indicare i centesimi



let distance = prompt('Quanti km devi percorrere?');

let age = prompt('Quanti anni hai?');

console.log(parseInt(distance));

console.log(parseInt(age));

let price = 0.21;

let youngPrice = price - (price * 20 / 100);

let seniorPrice = price - (price * 40 / 100);

if (age < 18) {
    let finalPrice = parseInt(distance) * youngPrice;
    console.log(finalPrice.toFixed(2));
}
else if (age > 65) {
    let finalPrice = parseInt(distance) * seniorPrice;
    console.log(finalPrice.toFixed(2));
}
else {
    let finalPrice = parseInt(distance) * price;
    console.log(finalPrice.toFixed(2));
}

