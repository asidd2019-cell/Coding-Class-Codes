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
})

function CalculateTotalIncomeAndExpense () {

}
