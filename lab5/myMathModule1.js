// Referencja do obiektu exports
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => {
    if (b === 0) throw new Error("Nie można dzielić przez zero");
    return a / b;
};
exports.power = (base, exponent) => Math.pow(base, exponent);

