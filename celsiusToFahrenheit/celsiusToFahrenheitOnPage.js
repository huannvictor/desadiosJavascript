let degreeValue = Number(document.querySelector('#degreeValue').value)
let degreeTypeCelsius = document.querySelector('#degreeTypeCelsius').value
let degreeTypeFahrenheit = document.querySelector('#degreeTypeFahrenheit').value

let transformButton = document
  .querySelector('#transformButton')
  .addEventListener('click', transform)

function transform(degree) {
  if (degreeTypeCelsius != '') {
    updatedDegree = degree
    formula = celsius => (celsius * 9) / 5 + 32
  } else if (degreeTypeFahrenheit != '') {
    updatedDegree = degree
    formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  }
  return formula(updatedDegree)
}

try {
  console.log(transform(degreeValue))
} catch (error) {
  console.error(error)
}
console.log(degreeValue)
