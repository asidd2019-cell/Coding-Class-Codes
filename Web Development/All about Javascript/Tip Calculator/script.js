const billInput = document.getElementById('bill')
const tipDropdown = document.getElementById('percentage_options')
const calculateBtn = document.getElementById('calculate_btn')
const calculatedTip = document.getElementById('calculated_tip')

calculateBtn.addEventListener('click', function(){
    let bill = billInput.value

    let tipPercentage = tipDropdown.value

    let tip = bill * tipPercentage / 100.0

    calculatedTip.innerHTML = `Tip is ${tip}`
})