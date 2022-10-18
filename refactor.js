function processNumberByRandom(num, process) {
  const randNum = Math.round(Math.random() * 100);
  switch (process) {
    case "sum":
      return `Seu número é ${randNum + num}!`;
      break;
    case "divide":
      return `Seu número é ${randNum / num}!`;
      break;
    case "multiply":
      return `Seu número é ${randNum * num}!`;
      break;
    case "subtract":
      return `Seu número é ${randNum - num}!`;
      break;
    default:
      return `Seu número é ${randNum + num}!`;
      break;
  }
}

console.log(processNumberByRandom(12, "divide"));
