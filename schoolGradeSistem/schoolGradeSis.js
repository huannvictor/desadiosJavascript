let sumitButton = document.querySelector('form div button')
let formInput = document.querySelector('form div input#score')
let output = document.querySelector('div#output p#gradeMessage')

sumitButton.addEventListener('click', run)

function run(event) {
  event.preventDefault()

  let valueScore = Number(formInput.value)

  function getScore(score) {
    let gradeA = score >= 90 && score <= 100
    let gradeB = score < 90 && score >= 80
    let gradeC = score < 80 && score >= 70
    let gradeD = score < 70 && score >= 60
    let gradeE = score < 60 && score >= 0

    if (gradeA) {
      finalScore = "You got an 'A'"
    } else if (gradeB) {
      finalScore = "You got an 'B'"
    } else if (gradeC) {
      finalScore = "You got an 'C'"
    } else if (gradeD) {
      finalScore = "You got an 'D'"
    } else if (gradeE) {
      finalScore = "You got an 'E'"
    } else {
      finalScore = 'Invalid Data'
    }

    return finalScore
  }

  output.innerHTML = `${getScore(valueScore)}`

}

// console.log(getScore(-1))
// console.log(getScore(99))
// console.log(getScore(89))
// console.log(getScore(79))
// console.log(getScore(69))
// console.log(getScore(59))
// console.log(getScore(0))
