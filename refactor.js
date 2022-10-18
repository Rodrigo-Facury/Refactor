function returnRandomNumber() {
  return Math.random();
}

function operateRandomNumber(num, operation) {
    // Número aléatorio entre 0 e 100
    const randomNumber = Math.round(returnRandomNumber() * 100);
    const result = operation(randomNumber, num);

    return `Seu número é ${result}!`;
}

// Para não estragarmos a interface publica, recriamos os metodos antigos com a nova mudança
// Além de diminuir a repetição de código, agora podemos também criar operações arbitrarias
// utilizando operateRandomNumber.
const sumToRandomNumber = (num) => operateRandomNumber(num, (a, b) => a + b);
const subtractRandomNumber = (num) => operateRandomNumber(num, (a, b) => a - b);
const multiplyToRandomNumber = (num) => operateRandomNumber(num, (a, b) => a * b);
const divideRandomNumber = (num) => operateRandomNumber(num, (a, b) => a / b);
