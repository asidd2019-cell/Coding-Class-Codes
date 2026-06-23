const nameInput = document.getElementById('name')
const nameValidationSpan = document.getElementById('name_validation')
const passwordInput = document.getElementById('password')
const passwordValidationSpan = document.getElementById('password_validation')
const emailInput = document.getElementById('email')
const emailValidationSpan = document.getElementById('email_validation')
const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/
const submitButton = document.getElementById('button')

let nameValid = false
let passwordValid = false
let emailValid = false

function updateButton(){
    if (nameValid && passwordValid && emailValid) {
        submitButton.disabled = false
        // submitButton.style.backgroundColor = '#094eed'
    }
    else{
        submitButton.disabled = true
    }
}

function nameValidator(str){
    if (str.length === 0) {
        nameValid = false
        updateButton()
        nameValidationSpan.innerHTML = "Name cannot be empty"
        return
    }

    for (var i = 0; i < str.length; i++) {
        nameValid = false
        updateButton()
        var code = str.charCodeAt(i);

        if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
            nameValidationSpan.innerHTML = "Name can only contain alphabets" ;
            return
        }
    }
    nameValid = true
    updateButton()
    nameValidationSpan.innerHTML = ""
}

nameInput.addEventListener('input', function (){
    nameValidator(nameInput.value)
})

function passwordValidator(str){
    if (str.length === 0) {
        let passwordValid = false
        updateButton()
        passwordValidationSpan.innerHTML = "Password cannot be empty"
        return
    }

    if (str.length < 8) {
        let passwordValid = false
        updateButton()
        passwordValidationSpan.innerHTML = "Password is too short (8 characters minimum)"
        return
    }
    let passwordValid = true
    updateButton()
    passwordValidationSpan.innerHTML = ""
}

passwordInput.addEventListener('input', function (){
    passwordValidator(passwordInput.value)
})

function emailValidator(str){
    if (str.length === 0) {
        let passwordValid = false
        updateButton()
        emailValidationSpan.innerHTML = "Email cannot be empty"
        return
    }

    if (!regex.test(str)) {
        let passwordValid = false
        updateButton()
        emailValidationSpan.innerHTML = "Enter a valid email"
        return
    }
    let passwordValid = true
    updateButton()
    emailValidationSpan.innerHTML = ""
}

emailInput.addEventListener('input', function (){
    emailValidator(emailInput.value)
})