let informedValue = '32'
let celcius = 0
let fahrenheit = 0

function transform() {
  let informedNumber = Number(informedValue)
  return informedNumber
}

function toCelsius(informedValue) {
  let celcius = ((informedValue - 32) * 5) / 9
  return celcius
}

function toFahrenheit(informedValue) {
  let fahrenheit = (informedValue * 9) / 5 + 32
  return fahrenheit
}

console.log(transform())
console.log(toCelsius(informedValue))
console.log(toFahrenheit(informedValue))
