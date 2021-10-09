let family = {
  incomes: [1500, 420, 6],
  expenses: [9102, 435, 15]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  let isOk = total >= 0

  let balanceText = 'negativo'

  if (isOk) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo atual é ${balanceText}: ${total}`)
}

calculateBalance()
