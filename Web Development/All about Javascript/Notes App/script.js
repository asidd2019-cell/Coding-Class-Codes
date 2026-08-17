const textArea = document.getElementById("textarea")
const addButton = document.getElementById("add_button")
const notes = document.getElementById("notes")

let notesIds = 1
addButton.addEventListener("click", ()=> {
    let notesText = textArea.value 
    if (notesText.trim() == ""){
        alert ("Write something to add a note.")
        return
    }
    let noteDiv = document.createElement('div')
    noteDiv.classList.add('note')

    noteDiv.setAttribute('id',notesIds)
    notesIds++

    let noteDetailsDiv = document.createElement('div')
    noteDetailsDiv.classList.add('note-details')
    noteDetailsDiv.innerHTML = `${notesText}`
    noteDetailsDiv.style.whiteSpace = "pre-wrap"

    let customizeButtonsDiv = document.createElement('div')
    customizeButtonsDiv.classList.add('customize-buttons')

    let editButton = document.createElement('button')
    editButton.classList.add('edit-button')
    editButton.innerHTML = 'Edit'

    editButton.addEventListener("click", ()=> {
        
    })

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = 'Delete'

    deleteButton.addEventListener("click", ()=> {
        noteDiv.remove()
    })

    customizeButtonsDiv.appendChild(editButton)
    customizeButtonsDiv.appendChild(deleteButton)

    noteDiv.appendChild(noteDetailsDiv)
    noteDiv.appendChild(customizeButtonsDiv)

    notes.appendChild(noteDiv)

    textArea.value = ''
})



