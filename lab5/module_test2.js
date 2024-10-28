// Zadanie 2 LAB5
const readline = require('readline');

const math1 = require('./myMathModule1');

const MyMathModule = require('./myMathModule2');

const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const performCalculations = async () => {
    const a = parseFloat(await askQuestion('Podaj pierwszą liczbę: '));
    const b = parseFloat(await askQuestion('Podaj drugą liczbę: '));

    console.log(`Dodawanie (Referencja do obiektu export): ${math1.add(a, b)}`);
    console.log(`Odejmowanie (Referencja do obiektu export): ${math1.subtract(a, b)}`);
    console.log(`Mnożenie (Referencja do obiektu export): ${math1.multiply(a, b)}`);
    console.log(`Dzielenie (Referencja do obiektu export): ${math1.divide(a, b)}`);
    console.log(`Potęgowanie (Referencja do obiektu export): ${math1.power(a, b)}`);
    console.log();
    console.log(`Dodawanie (Podejście obiektowe): ${math2.add(a, b)}`);
    console.log(`Odejmowanie (Podejście obiektowe): ${math2.subtract(a, b)}`);
    console.log(`Mnożenie (Podejście obiektowe): ${math2.multiply(a, b)}`);
    console.log(`Dzielenie (Podejście obiektowe): ${math2.divide(a, b)}`);
    console.log(`Potęgowanie (Podejście obiektowe): ${math2.power(a, b)}`);

    rl.close();
};

performCalculations().catch((error) => {
    console.error(error.message);
    rl.close();
});
