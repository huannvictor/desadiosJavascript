// objetct that'll keeper the data
let dataValue = {
  incomes: [],
  expenses: []
}

// informed values
let incomeValue = document.querySelector('section form input#income')
let expenseValue = document.querySelector('section form input#expenses')

//function sum
function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

// buttons who'll run the functions
let submitInc = document
  .querySelector('#submitInc')
  .addEventListener('click', inc)

let submitExp = document
  .querySelector('#submitExp')
  .addEventListener('click', exp)

let calc = document
  .querySelector('#calculate')
  .addEventListener('click', calculate)

// output of the results on page
let writeInc = document.querySelector('#writeInc')
let writeExp = document.querySelector('#writeExp')
let writeBal = document.querySelector('#writeBal')

// FUNCTIONS THAL WILL BE EXECUTED

// sum ofincome values

function inc(event) {
  event.preventDefault()

  dataValue.incomes.push(Number(incomeValue.value))
  const sumIncome = dataValue.incomes.reduce(
    (sumIncome, currentElement) => sumIncome + currentElement
  )
  writeInc.innerHTML = `${sumIncome.toFixed(2)}`
}


// sum of expense values
function exp(event) {
  event.preventDefault()

  dataValue.expenses.push(Number(expenseValue.value))
  const sumExpense = dataValue.expenses.reduce(
    (sumExpense, currentElement) => sumExpense + currentElement
  )
  writeExp.innerHTML = `${sumExpense.toFixed(2)}`
}

// balance calculated
function calculate(event) {
  event.preventDefault()

  const calculateIncomes = sum(dataValue.incomes)
  const calculateExpenses = sum(dataValue.expenses)

  const total = calculateIncomes - calculateExpenses
  
  let positive = total >= 0
  let negative = total < 0

  if (positive) {
    balanceText = `Your balance is POSITIVE: ${total.toFixed(2)}`
  }else if (negative) {
    balanceText = `Your balance is NEGATIVE: ${total.toFixed(2)}`
  }
  writeBal.innerHTML = `${balanceText}`
  console.log(balanceText)
}

console.log(dataValue.incomes)
console.log(dataValue.expenses)