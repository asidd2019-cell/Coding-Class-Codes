onPageLoad()
var tasks = []
const form = document.getElementById("form")

form.addEventListener("submit",function (e){
    e.preventDefault()

    const name = document.getElementById("NameofTask").value
    const description = document.getElementById("DescriptionofTask").value
    const stDate = document.getElementById("StartofTask").value
    const endDate = document.getElementById("EndofTask").value

    tasks.push (
        {
            "name":name,
            "description":description,
            "startDate":stDate,
            "endDate":endDate
        }
    )
    localStorage.setItem("tasks",JSON.stringify(tasks))
    addTask(name,description,stDate,endDate)
})

function onPageLoad(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    for(const task of tasks){
        addTask(task.name,task.description,task.stDate,task.endDate)
    }
}

function addTask(name,description,stDate,endDate){
    console.log("sdffgwgdbhbgh")
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${name}</td>
    <td>${description}</td>
    <td>${stDate}</td>
    <td>${endDate}</td>
    `

    const table = document.getElementById("table")

    table.appendChild(tr)
}