const textArea = document.getElementById("textarea")
const addButton = document.getElementById("add_button")
const notes = document.getElementById("notes")

addButton.addEventListener("click", ()=> {
    let notesText = textArea.value 
    if (notesText.trim() == ""){
        alert ("Write something to add a note.")
    }
})