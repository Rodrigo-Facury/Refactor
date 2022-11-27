function RandomNumber () {
  const returnNumber = (number) => `Seu número é ${number}!`

  this.randomNumber = Math.random()
  const roundedRandomNumber = Math.round(this.randomNumber * 100)

  this.sum = (number) => returnNumber(roundedRandomNumber + number)
  this.subtract = (number) => returnNumber(roundedRandomNumber - number)
  this.multiply = (number) => returnNumber(roundedRandomNumber * number)
  this.divide = (number) => returnNumber(roundedRandomNumber / number)
}

RandomNumber.prototype.toString = function () {
  return this.randomNumber
}
