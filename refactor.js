function returnRandomNumber() {
  return Math.random();
}

function operateRandomNumber(num, operation) {
    const number = returnRandomNumber();

    return `Seu número é ${operation(Math.round(number * 100), num)}!`;
}

// Para não estragarmos a interface publica, recriamos os metodos antigos com a nova mudança
// Além de diminuir a repetição de código, agora podemos também criar operações arbitrarias
// utilizando operateRandomNumber.
const sumToRandomNumber = (num) => operateRandomNumber(num, (a, b) => a + b);
const subtractRandomNumber = (num) => operateRandomNumber(num, (a, b) => a - b);
const multiplyToRandomNumber = (num) => operateRandomNumber(num, (a, b) => a * b);
const divideRandomNumber = (num) => operateRandomNumber(num, (a, b) => a / b);
