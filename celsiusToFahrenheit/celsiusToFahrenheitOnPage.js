// inputs

let degreeValue = document.querySelector('#degreeValue')
let degreeTypeCelsius = document.querySelector('select #degreeTypeCelsius').value
let degreeTypeFahrenheit = document.querySelector('select #degreeTypeFahrenheit').value
let transformButton = document
  .querySelector('#transformButton')
  .addEventListener('click', transform)

console.log(degreeValue)
console.log(degreeTypeCelsius)
console.log(degreeTypeFahrenheit)

// verification
let select = document.querySelector('#degreeType')
let option = select.options[select.selectedIndex].option
console.log(option)

if (degreeTypeCelsius.selectedIndex != "") {
  degreeType = ' celsius'
  console.log(degreeType)
} else if (degreeTypeFahrenheit.selectedIndex != "") {
  degreeType = ' fahrenheit'
  console.log(degreeType)
}

function transform() {
  let newDegreeValue    = Number(degreeValue.value)
  let writeDegreeValue  = document.querySelector('#writeDegreeValue').innerHTML = newDegreeValue
  let writeDegreeType   = document.querySelector('#writeDegreeType').innerHTML = option
}

// outputs

let writeTransformedDegree = document.querySelector('#writeTransformedDegree')
