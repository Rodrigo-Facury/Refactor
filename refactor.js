export function returnRandomNumber() {
  return Math.random();
}

export function returnRandomNumber(num, operation) {
  const operations = {
    numberToSum: (num) => num + returnRandomNumber(),
    numberToSubtract: (num) => num - returnRandomNumber(),
    numberToMultiply: (num) => num * returnRandomNumber(),
    numberToDivide: (num) => num / returnRandomNumber(),
  };
  return `Seu número é ${Math.round(operations[operation](num) * 100)}!`;

}

// function sumToRandomNumber(num) {
//   const numberToSum = returnRandomNumber();

//   return `Seu número é ${Math.round(numberToSum * 100) + num}!`;
// }

// function subtractRandomNumber(num) {
//   const numberToSubtract = returnRandomNumber();

//   return `Seu número é ${Math.round(numberToSubtract * 100) - num}!`;
// }

// function multiplyToRandomNumber(num) {
//   const numberToMultiply = returnRandomNumber();

//   return `Seu número é ${Math.round(numberToMultiply * 100) * num}!`;
// }

// function divideRandomNumber(num) {
//   const numberToDivide = returnRandomNumber();

//   return `Seu número é ${Math.round(numberToDivide * 100) / num}!`;
// }
