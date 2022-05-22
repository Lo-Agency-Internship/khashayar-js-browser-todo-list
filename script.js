let tasks =[]
let idx =0;

const load = ()=>{
    const body = document.getElementById("todo-body");
    body.innerHTML =""
    tasks.forEach(task =>{
         body.innerHTML += `<div class="task id="${task.id}">
                                <div class="task-title" ">
                                    ${task.title}
                                </div>
                                <button id="deleteBtn" onclick="deleteTask(${task.id})">
                                <span>&times;</span>
                                </button>
                            </div>`
    })
}

const addTask = ()=>{
    const input = document.getElementById("addTaskInput");
    if(input.value===""){
        alert("Please fill the textbox to add the tasks!")
    }
    else{
        idx++;
        tasks.push({id: idx, title:input.value});
        input.value="";
        load()
    }
}

const deleteTask = (idx) =>{
    tasks = tasks.filter(task=>task.id !== idx)
    load();
}

const clearAll =()=>{
    tasks =[];
    load();
}