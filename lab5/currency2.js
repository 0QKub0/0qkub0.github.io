//currency2.js
class CurrencyConverter {
    constructor(rates) {
        this.exchangeRates = rates;
    }

    convertToPLN(amount, currency) {
        if (!this.exchangeRates[currency]) {
            throw new Error(`Nieznana waluta: ${currency}`);
        }
        return amount * this.exchangeRates[currency];
    }
}

module.exports = CurrencyConverter;
