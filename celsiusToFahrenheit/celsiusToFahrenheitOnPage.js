// inputs

let degreeValue = document.querySelector('#degreeValue')
let transformButton = document
  .querySelector('#transformButton')
  .addEventListener('click', transform)

// verification

function transform(converter) {
  converter.preventDefault()
  let outDegreeValue = Number(degreeValue.value)
  let TransformedDegree
  let newDegreeType

  let degreeType = document.querySelector('#degreeType')
  if (degreeType.options[degreeType.selectedIndex].value == "celsius"){
    degreeType = "celsius → "
      TransformedDegree = (outDegreeValue * (9/5) + 32)
    newDegreeType = "fahrenheit"
  }else if (degreeType.options[degreeType.selectedIndex].value == "fahrenheit"){
    degreeType = "fahrenheit → "
    TransformedDegree = (outDegreeValue - 32) * (5/9)
    newDegreeType = "celsius"
  }else{
    degreeType = " ⨂"
    alert('please, select a valid degree')
  }
  let writeDegreeValue = (document.querySelector('#writeDegreeValue').innerHTML = outDegreeValue.toFixed(1)  + 'º ' +  degreeType)
  let writeTransformedDegree = document.querySelector('#writeTransformedDegree').innerHTML = TransformedDegree.toFixed(1) + 'º ' + newDegreeType
}