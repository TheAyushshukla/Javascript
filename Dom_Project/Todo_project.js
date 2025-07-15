let addbtn=document.querySelector("#addBtn");

addbtn.addEventListener("click",function(){
    let taskInput=document.querySelector("#taskInput");
    let taskText=taskInput.value.trim();

    if(taskText===""){
        alert("⚠️ Please Enter a Task");
        return;
    }
    
    // create the task div
    let task=document.createElement("div");
    task.classList.add("task");

    // task text
    let TaskName=document.createElement("span");
    TaskName.innerText=taskText;

    // complete button
    let completeBtn=document.createElement("button");
    completeBtn.innerText="✅";
    completeBtn.classList.add("btn");
    completeBtn.addEventListener("click",()=>{
        TaskName.classList.toggle("completed");
    });

    let DeleteBtn=document.createElement("button");
    DeleteBtn.innerText="🗑️";
    DeleteBtn.classList.add("btn");
    DeleteBtn.addEventListener("click",()=>{
        task.remove();
    });
    task.appendChild(TaskName);
    task.appendChild(completeBtn);
    task.appendChild(DeleteBtn);

    document.querySelector("#taskList").append(task);

    taskInput.value="";
});