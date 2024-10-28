//Podejśćie obiektowe
class MyMathModule {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) throw new Error("Nie można dzielić przez zero");
        return a / b;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}
module.exports = MyMathModule;
