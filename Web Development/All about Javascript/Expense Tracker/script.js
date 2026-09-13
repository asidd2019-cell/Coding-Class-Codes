const input = document.getElementById("input")
const type = document.getElementById("type")
const description = document.getElementById("description")
const amount = document.getElementById("amount")
const addTransaction = document.getElementById("addTransaction")

const expenses = []

addTransaction.addEventListener("click", (e) => {
    e.preventDefault()
    const transactionType = type.value
    const transactionDesc = description.value
    const transactionAmount = amount.value
    if (transactionType == "" || transactionDescription == "" || transactionAmount == "") {
        alert("Fill out the inputs before adding a transaction")
        return
    }

    expenses.push({
        "type":transactionType,
        "description":transactionDesc,
        "amount":transactionAmount
    })
    console.log(expenses)
    CalculateTotalIncomeAndExpense()
})

function CalculateTotalIncomeAndExpense () {
    totalIncomeSum = 0
    totalExpenseSum = 0

    for(const transaction of expenses)
    {
        if (transaction["type"] == "income"){
            totalIncomeSum += parseInt(transaction["amount"])
        }
        if (transaction["type"] == "expense"){
            totalExpenseSum += parseInt(transaction["amount"])
        }
    }

    currentBalance = totalIncomeSum - totalExpenseSum

    const curBalSpan = document.getElementById('curBalSpan')
    const incomeSpan = document.getElementById('incomeSpan')
    const expenseSpan = document.getElementById('expenseSpan')

    curBalSpan.innerHTML = "$ " + `${currentBalance}`
    incomeSpan.innerHTML = "$ " + `${totalIncomeSum}`
    expenseSpan.innerHTML = "$ " + `${totalExpenseSum}`
}

function ShowTransaction () {
  transactionInfoSpan = document.createElement("transactionInfoSpan")
  transactionInfoSpan.classList.add ("transaction-info-span")

  transactionHistory = document.createElement("transactionHistory")
  transactionHistory.classList.add ("transaction-history")

  incomeTransaction = document.createElement("incomeTransaction")
  incomeTransaction.classList.add ("income-transaction")
  incomeTransaction.AppendChild (incomeTransactionDetails)
  incomeTransaction.AppendChild (incomeTransactionDescription)
  incomeTransaction.AppendChild (incomeTransactionDate)
  incomeTransaction.AppendChild (incomeAmountAndCancel)

  incomeTransactionDetails = document.createElement("incomeTransactionDetails")
  incomeTransactionDetails.classList.add ("transaction-details")

  incomeTransactionDescription = document.createElement("incomeTransactionDescription")
  incomeTransactionDescription.classList.add ("transaction-description")

  incomeTransactionDate = document.createElement("incomeTransactionDate")
  incomeTransactionDate.classList.add ("transaction-date")

  incomeAmountAndCancel = document.createElement("incomeAmountAndCancel")
  incomeAmountAndCancel.classList.add ("amount-and-cancel")
  incomeAmountAndCancel.AppendChild (incomeTransactionAmount)
  incomeAmountAndCancel.AppendChild (incomeTransactionAmountSpan)

  incomeTransactionAmount = document.createElement("incomeTransactionAmount")
  incomeTransactionAmount.classList.add ("income-transaction-amount")
  incomeTransactionAmount.AppendChild (incomeTransactionAmountSpan)

  incomeTransactionAmountSpan = document.createElement("incomeTransactionAmountSpan")

  incomeCancelTransaction = document.createElement("incomeCancelTransaction")
  incomeCancelTransaction.classList.add ("fa-solid")
  incomeCancelTransaction.classList.add ("fa-x")
//  _____________________________________________________________________________________________

  expenseTransaction = document.createElement("expenseTransaction")
  expenseTransaction.classList.add ("expense-transaction")
  expenseTransaction.AppendChild (expenseTransactionDetails)
  expenseTransaction.AppendChild (expenseTransactionDescription)
  expenseTransaction.AppendChild (expenseTransactionDate)
  expenseTransaction.AppendChild (expenseAmountAndCancel)

  expenseTransactionDetails = document.createElement("expenseTransactionDetails")
  expenseTransactionDetails.classList.add ("transaction-details")

  expenseTransactionDescription = document.createElement("expenseTransactionDescription")
  expenseTransactionDescription.classList.add ("transaction-description")

  expenseTransactionDate = document.createElement("expenseTransactionDate")
  expenseTransactionDate.classList.add ("transaction-date")

  expenseAmountAndCancel = document.createElement("expenseAmountAndCancel")
  expenseAmountAndCancel.classList.add ("amount-and-cancel")
  expenseAmountAndCancel.AppendChild (expenseTransactionAmount)
  expenseAmountAndCancel.AppendChild (expenseTransactionAmountSpan)

  expenseTransactionAmount = document.createElement("expenseTransactionAmount")
  expenseTransactionAmount.classList.add ("expense-transaction-amount")
  expenseTransactionAmount.AppendChild (expenseTransactionAmountSpan)

  expenseTransactionAmountSpan = document.createElement("expenseTransactionAmountSpan")

  expenseCancelTransaction = document.createElement("expenseCancelTransaction")
  expenseCancelTransaction.classList.add ("fa-solid")
  expenseCancelTransaction.classList.add ("fa-x")
}