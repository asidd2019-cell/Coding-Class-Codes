const input = document.getElementById("input")
const type = document.getElementById("type")
const description = document.getElementById("description")
const amount = document.getElementById("amount")
const addTransaction = document.getElementById("addTransaction")
const transactionHistory = document.getElementById("transactionHistory")
const incomeTransactionHistory = document.getElementById("incomeTransactionHistory")
const expenseTransactionHistory = document.getElementById("expenseTransactionHistory")
const allPage = document.getElementById("allPage")
const incomePage = document.getElementById("incomePage")
const expensePage = document.getElementById("expensePage")

let expenses = []

addTransaction.addEventListener("click", (e) => {
    e.preventDefault()
    const transactionType = type.value
    const transactionDesc = description.value
    const transactionAmount = amount.value
    if (transactionType == "" || transactionDesc == "" || transactionAmount == "") {
        alert("Fill out the inputs before adding a transaction")
        return
    }

    const TransactionDate = new Date().toISOString().slice(0, 10);
    expenses.push({
        "type":transactionType,
        "description":transactionDesc,
        "amount":transactionAmount,
        "date":TransactionDate
    })
    console.log(expenses)
    CalculateTotalIncomeAndExpense()
    ShowTransaction(transactionAmount,transactionDesc,TransactionDate,transactionType)
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

function ShowTransaction (amount,description,date,type) {

    if (type == "income") {
        const incomeTransaction = document.createElement("div")
        incomeTransaction.classList.add ("income-transaction")

        const incomeTransactionDetails = document.createElement("div")
        incomeTransactionDetails.classList.add ("transaction-details")

        const incomeTransactionDescription = document.createElement("span")
        incomeTransactionDescription.classList.add ("transaction-description")
        incomeTransactionDescription.innerHTML = description

        const incomeTransactionDate = document.createElement("span")
        incomeTransactionDate.classList.add ("transaction-date")
        incomeTransactionDate.innerHTML = date

        const incomeAmountAndCancel = document.createElement("div")
        incomeAmountAndCancel.classList.add ("amount-and-cancel")

        const incomeTransactionAmount = document.createElement("div")
        incomeTransactionAmount.classList.add ("income-transaction-amount")
        incomeTransactionAmount.innerHTML = `+ $${amount}`

        const incomeTransactionAmountSpan = document.createElement("span")

        const incomeCancelTransaction = document.createElement("i")
        incomeCancelTransaction.classList.add ("fa-solid")
        incomeCancelTransaction.classList.add ("fa-x") 
        
        incomeCancelTransaction.addEventListener ("click", () => {
            incomeTransaction.remove()
            expenses = expenses.filter(n => n.amount != amount || n.description != description || n.date != date || n.type != type)
            CalculateTotalIncomeAndExpense()
        })

        incomeTransactionDetails.appendChild (incomeTransactionDescription)
        incomeTransactionDetails.appendChild (incomeTransactionDate)

        incomeTransactionAmount.appendChild (incomeTransactionAmountSpan)
        
        incomeTransaction.appendChild (incomeTransactionDetails)
        incomeTransaction.appendChild (incomeAmountAndCancel)

        incomeAmountAndCancel.appendChild (incomeTransactionAmount)
        incomeAmountAndCancel.appendChild (incomeCancelTransaction)

        incomeTransactionAmount.appendChild (incomeTransactionAmountSpan)

        transactionHistory.appendChild (incomeTransaction)

        incomeTransactionHistory.appendChild (incomeTransaction)
    }

    if (type == "expense") {
        const expenseTransaction = document.createElement("div")
        expenseTransaction.classList.add ("expense-transaction")

        const expenseTransactionDetails = document.createElement("div")
        expenseTransactionDetails.classList.add ("transaction-details")

        const expenseTransactionDescription = document.createElement("span")
        expenseTransactionDescription.classList.add ("transaction-description")
        expenseTransactionDescription.innerHTML = description

        const expenseTransactionDate = document.createElement("span")
        expenseTransactionDate.classList.add ("transaction-date")
        expenseTransactionDate.innerHTML = date

        const expenseAmountAndCancel = document.createElement("div")
        expenseAmountAndCancel.classList.add ("amount-and-cancel")

        const expenseTransactionAmount = document.createElement("div")
        expenseTransactionAmount.classList.add ("expense-transaction-amount")
        expenseTransactionAmount.innerHTML = `- $${amount}`

        const expenseTransactionAmountSpan = document.createElement("span")

        const expenseCancelTransaction = document.createElement("i")
        expenseCancelTransaction.classList.add ("fa-solid")
        expenseCancelTransaction.classList.add ("fa-x")

        expenseCancelTransaction.addEventListener ("click", () => {
            expenseTransaction.remove()
            expenses = expenses.filter(n => n.amount != amount || n.description != description || n.date != date || n.type != type)
            CalculateTotalIncomeAndExpense()
        })

        expenseTransaction.appendChild (expenseTransactionDetails)
        expenseTransaction.appendChild (expenseAmountAndCancel)

        expenseAmountAndCancel.appendChild (expenseTransactionAmount)
        expenseAmountAndCancel.appendChild (expenseCancelTransaction)

        expenseTransactionAmount.appendChild (expenseTransactionAmountSpan)

        expenseTransactionDetails.appendChild (expenseTransactionDescription)
        expenseTransactionDetails.appendChild (expenseTransactionDate)

        transactionHistory.appendChild (expenseTransaction)

        expenseTransactionHistory.appendChild (expenseTransaction)
    }
}

allPage.addEventListener ("click", () => {
    allPage.classList.add ("button-active")
    incomePage.classList.remove ("button-active")
    expensePage.classList.remove ("button-active")

    incomeTransactionHistory.style.display = 'flex'
    expenseTransactionHistory.style.display = 'flex'
    transactionHistory.style.display = 'flex'
})

incomePage.addEventListener ("click", () => {
    incomePage.classList.add ("button-active")
    allPage.classList.remove ("button-active")
    expensePage.classList.remove ("button-active")

    incomeTransactionHistory.style.display = 'flex'
    expenseTransactionHistory.style.display = 'none'
    transactionHistory.style.display = 'none'
})

expensePage.addEventListener ("click", () => {
    expensePage.classList.add ("button-active")
    allPage.classList.remove ("button-active")
    incomePage.classList.remove ("button-active")

    incomeTransactionHistory.style.display = 'none'
    expenseTransactionHistory.style.display = 'flex'
    transactionHistory.style.display = 'none'
})


