const modal = document.getElementById('modal')
const remSpan = document.getElementById('remaining')
const totalSpan = document.getElementById('current')
const input = document.getElementById('input')

let limit = 20
input.setAttribute("maxLength", limit)

input.addEventListener('input', function () {
    let current = input.value.length
    let remaining = limit - current
    remSpan.innerHTML = `Remaining Characters: ${remaining}`;
    totalSpan.innerHTML = `Current Characters: ${current}`;
})

