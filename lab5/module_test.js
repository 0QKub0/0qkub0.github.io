// Zadanie 1 LAB5
console.log("Referencja do obiektu export:");
const currency1 = require('./currency1');

try {
    console.log(`100 USD w PLN: ${currency1.convertToPLN(100, 'USD')}`);
    console.log(`100 EUR w PLN: ${currency1.convertToPLN(100, 'EUR')}`);
    console.log(`100 GBP w PLN: ${currency1.convertToPLN(100, 'GBP')}`);
    console.log(`100 CHF w PLN: ${currency1.convertToPLN(100, 'CHF')}`);
    console.log(`100 JPY w PLN: ${currency1.convertToPLN(100, 'JPY')}`);
} catch (error) {
    console.error(error.message);
}

console.log();

console.log("Podejście obiektowe");
const Currency = require('./currency2');
const rates = {
    USD: 4.0,
    EUR: 4.5,
    GBP: 5.0,
    CHF: 4.2,
    JPY: 0.03
};
let currency2 = new Currency(rates);

try {
    console.log(`100 USD w PLN: ${currency2.convertToPLN(100, 'USD')}`);
    console.log(`100 EUR w PLN: ${currency2.convertToPLN(100, 'EUR')}`);
    console.log(`100 GBP w PLN: ${currency2.convertToPLN(100, 'GBP')}`);
    console.log(`100 CHF w PLN: ${currency2.convertToPLN(100, 'CHF')}`);
    console.log(`100 JPY w PLN: ${currency2.convertToPLN(100, 'JPY')}`);
} catch (error) {
    console.error(error.message);
}
