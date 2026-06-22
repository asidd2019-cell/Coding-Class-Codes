const nameInput = document.getElementById('name')
const nameValidationSpan = document.getElementById('name_validation')
const passwordInput = document.getElementById('password')
const passwordValidationSpan = document.getElementById('password_validation')

function nameValidator(str){
    if (str.length === 0) {
        nameValidationSpan.innerHTML = "Name cannot be empty"
        return
    }

    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
            nameValidationSpan.innerHTML = "Name can only contain alphabets" ;
            return
        }
    }
    nameValidationSpan.innerHTML = ""
}

nameInput.addEventListener('input', function (){
    nameValidator(nameInput.value)
})

function passwordValidator(str){
    if (str.length === 0) {
        passwordValidationSpan.innerHTML = "Password cannot be empty"
        return
    }

    if (str.length < 8) {
        passwordValidationSpan.innerHTML = "Password is too short (8 characters minimum)"
        return
    }
    passwordValidationSpan.innerHTML = ""
}

passwordInput.addEventListener('input', function (){
    passwordValidator(passwordInput.value)
})