// Referencja do obiektu exports
const exchangeRates = {
    USD: 4.0, 
    EUR: 4.5, 
    GBP: 5.0, 
    CHF: 4.2, 
    JPY: 0.03 
};

exports.convertToPLN = (amount, currency) => {
    if (!exchangeRates[currency]) {
        throw new Error(`Nieznana waluta: ${currency}`);
    }
    return amount * exchangeRates[currency];
};
