let degreeValue = document.querySelector('#degreeValue')
let degreeTypeCelsius = document.querySelector('#degreeTypeCelsius')
let degreeTypeFahrenheit = document.querySelector('#degreeTypeFahrenheit')

let transformButton = document
  .querySelector('#transformButton')
  .addEventListener('click', transform)

function transform(degree) {
  degree.preventDefault()
  
  degreeValue = Number(degreeValue.value)


  const celsiusExists = degree.includes('celsius')
  const fahrenheitExists = degree.includes('fahrenheit')
  
  console.log(degreeValue + degreeType)

  let updatedDegree

  if (degreeTypeCelsius = 'celsius') {
    updatedDegree = degree
    formula = celsius => (celsius * 9) / 5 + 32
  } else if (degreeTypeFahrenheit = 'fahrenheit') {
    updatedDegree = degree
    formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  }
  return formula(updatedDegree)

}

