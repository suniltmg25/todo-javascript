let task = "";
let taskArray = [];
let todoItems = [];

const inputArea = document.getElementById("input-area");
inputArea.addEventListener("change", SetTaskItem);

function SetTaskItem(event){
    task = event.target.value;
}

const BTN = document.getElementById("btn");
BTN.addEventListener("click", SaveTask);

let count = 0;

function SaveTask (e){
    if (task == ""){
        alert("Enter your task first");
    } else{
        taskArray.push(task);
        // console.log(taskArray);
        // count++;
        // localStorage.setItem("Task" +count, task);
        localStorage.setItem("Tasks", JSON.stringify(taskArray));
    CreateItem();
}
}
// Result Area
function GetItem(){
    const Items = localStorage.getItem("Tasks");
    todoItems = JSON.parse(Items);
    // console.log(todoItems);
}

const resultArea = document.getElementById("result-area");

function CreateItem(){
GetItem();
resultArea.innerHTML = "";
    if(todoItems != null){
        for(i = 0; i < todoItems.length; i++ ){

            // Creating Sub-Area
            const Sub_Div = document.createElement("div");
            Sub_Div.classList.add("sub-area");
            Sub_Div.id = "sub-area";
        
            const Checkbox = document.createElement("input");
            Checkbox.type = "checkbox";
            Checkbox.id = "Check-Checkbox";
        
            const text = document.createElement("p");
            text.innerText = todoItems[i];
            text.classList.add("TextToCross");
            text.id = "TextToCross";
        
            const div = document.createElement("div");
            div.classList.add("progress");
        
            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-xmark");
            icon.id = "Icon";
        
            Sub_Div.appendChild(Checkbox);
            Sub_Div.appendChild(text);
            Sub_Div.appendChild(div);
            Sub_Div.appendChild(icon);
            
            resultArea.appendChild(Sub_Div);
        }
    } else{
        const msg = document.createElement("p");
        msg.innerHTML = "Enter your task!!";
        msg.className = "MSG";
        resultArea.appendChild(msg);
    }
// Line Through
// const CheckboxToSelect = document.getElementById("Check-Checkbox");
// const SelectedTaskToCross = document.getElementById("TextToCross");

// CheckboxToSelect.addEventListener("change", LineThrough);
// function LineThrough(){
//     if(this.checked){
//         SelectedTaskToCross.style.textDecoration = "line-through";
//     } else{
//         SelectedTaskToCross.style.textDecoration = "none";
//     }
// }
// Remove Selected Tasks
// const CrossIcon = document.getElementById("Icon").addEventListener("click", function RemoveSelectedTasks(){
//         localStorage.removeItem("Tasks");
// })
}
CreateItem();

