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

function ShowTransaction {
  transactionInfoSpan = document.createElement("transactionInfoSpan")

  transactionHistory = document.createElement("transactionHistory")

  incomeTransaction = document.createElement("incomeTransaction")
  expenseTransaction = document.createElement("expenseTransaction")

  incomeTransactionDetails = document.createElement("incomeTransactionDetails")

  incomeTransactionDescription = document.createElement("incomeTransactionDescription")

  incomeTransactionDate = document.createElement("incomeTransactionDate")

  amountAndCancel = document.createElement("amountAndCancel")
  amountAndCancel.AppendChild (incomeTransactionAmount)
  amountAndCancel.AppendChild (incomeTransactionAmountSpan)

  incomeTransactionAmount = document.createElement("incomeTransactionAmount")

  incomeTransactionAmountSpan = document.createElement("incomeTransactionAmountSpan")

  cancelTransaction = document.createElement("cancelTransaction")
}