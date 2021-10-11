// inputs

let degreeValue = document.querySelector('#degreeValue')
let transformButton = document
  .querySelector('#transformButton')
  .addEventListener('click', transform)

console.log(degreeValue)
console.log(degreeTypeCelsius)
console.log(degreeTypeFahrenheit)

// verification

function transform() {
  let outDegreeValue = Number(degreeValue.value)
  let TransformedDegree
  let newDegreeType

  let degreeType = document.querySelector('#degreeType')
  if (degreeType.options[degreeType.selectedIndex].value == "celsius"){
    degreeType = " celsius → "
    TransformedDegree = (outDegreeValue - 32) * (5/9)
    newDegreeType = " fahrenheit"
  }else if (degreeType.options[degreeType.selectedIndex].value == "fahrenheit"){
    degreeType = "º fahrenheit → "
    TransformedDegree = (outDegreeValue*9)/5+32
    newDegreeType = "º celsius"
  }else{
    degreeType = " ⨂"
    alert('please, select a valid degree')
  }
  let writeDegreeValue = (document.querySelector('#writeDegreeValue').innerHTML = outDegreeValue + degreeType)
  let writeTransformedDegree = document.querySelector('#writeTransformedDegree').innerHTML = TransformedDegree.toFixed(2) + newDegreeType
}

// outputs

