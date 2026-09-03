const input = document.getElementById("input")
const type = document.getElementById("type")
const description = document.getElementById("description")
const amount = document.getElementById("amount")
const addTransaction = document.getElementById("addTransaction")

const expenses = []

addTransaction.addEventListener("click", (e) => {
    e.preventDefault()
    const transactionType = type.value
    const transactionDescription = description.value
    const transactionAmount = amount.value
    if (transactionType == "" || transactionDescription == "" || transactionAmount == "") {
        alert("Fill out the inputs before adding a transaction")
        return
    }

    expenses.push({
        "type":transactionType,
        "description":transactionDescription,
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

// total transaction
//convert transaction into number
// subtract income/expense for current balance
// get spans from html and make its numbers show