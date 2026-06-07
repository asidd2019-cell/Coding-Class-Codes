onPageLoad()
var tasks = []
var current_task_id = 1
const form = document.getElementById("form")
let currentUpdateId = null;
const modal = document.getElementById("updateModal");
const saveButton = document.getElementById("saveUpdate");
const closeButton = document.getElementById("closeModal");

form.addEventListener("submit",function (e){
    e.preventDefault()

    const name = document.getElementById("NameofTask").value
    const description = document.getElementById("DescriptionofTask").value
    const stDate = document.getElementById("StartofTask").value
    const endDate = document.getElementById("EndofTask").value

    const id = getNewId()

    tasks.push (
        {
            "id":id,
            "name":name,
            "description":description,
            "startDate":stDate,
            "endDate":endDate
        }
    )
    localStorage.setItem("tasks",JSON.stringify(tasks))
    addTask(id,name,description,stDate,endDate)
})

function getNewId(){
    newId = current_task_id + 1
    current_task_id = newId
    return newId
}

function onPageLoad(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    for(const task of tasks){
        addTask(task.name,task.description,task.stDate,task.endDate)
    }
}

function addTask(id,name,description,stDate,endDate){
    console.log("sdffgwgdbhbgh")
    const tr = document.createElement("tr")
    tr.id = id
    tr.innerHTML = `
    <td>${name}</td>
    <td>${description}</td>
    <td>${stDate}</td>
    <td>${endDate}</td>
    <td><button class="update-button">Update</button></td>
    <td><button class="delete-button">Delete</button></td>
    `
    tr.id = id;

      const deleteButton = tr.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {

        tasks = tasks.filter(task => task.id !== id);
        
        localStorage.setItem("tasks", JSON.stringify(tasks));

        tr.remove();
    });

    const updateButton = tr.querySelector(".update-button");

    updateButton.addEventListener("click", function () {

    const task = tasks.find(t => t.id === id);

    currentUpdateId = id;

    document.getElementById("updateName").value = task.name;
    document.getElementById("updateDescription").value = task.description;
    document.getElementById("updateStart").value = task.startDate;
    document.getElementById("updateEnd").value = task.endDate;

    modal.style.display = "flex";
    });

        closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        });

        saveButton.addEventListener("click", function () {

    const task = tasks.find(t => t.id === currentUpdateId);

    task.name = document.getElementById("updateName").value;
    task.description = document.getElementById("updateDescription").value;
    task.startDate = document.getElementById("updateStart").value;
    task.endDate = document.getElementById("updateEnd").value;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    const tr = document.getElementById(currentUpdateId);

    tr.children[0].textContent = task.name;
    tr.children[1].textContent = task.description;
    tr.children[2].textContent = task.startDate;
    tr.children[3].textContent = task.endDate;

    modal.style.display = "none";
});

    const table = document.getElementById("table")

    table.appendChild(tr)
}