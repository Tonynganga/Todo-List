let uncompleted = [];
console.log(uncompleted);
let completed = [];


const saveTask = e => {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let desc = document.getElementById('desc').value;

   
    let formData = {
        task_title:title,
        task_date: date,
        task_desc: desc
    }
    uncompleted.push(formData);
    document.querySelector('form').reset();
    retrieveTasks();
    console.log(uncompleted);
    e.preventDefault();
}

function retrieveTasks(){
    var list = document.querySelector("ul");
    // var list = document.getElementById("#uncompleted");
    list.innerHTML = "";
        uncompleted.forEach((data, index) =>{
            // console.log(data.task_title);
            list.innerHTML += ` 
            <div class="holder">
                <input type="checkbox" onclick="taskComplete(this);" class="check">
                <div class="upper">
                    <input type="text" value="${data.task_title}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
                    <input type="date" value="${data.task_date}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
                </div>
                <div class="content">
                    <input type="text" value="${data.task_desc}" class="task1" onfocus="getCurrentTask();" onblur="editTask(this)">
                    <img src="images/circle-check-solid.svg" class="trash" onclick= "markCompleted(${index})" alt="">
                    <img src="images/trash-solid.svg" class="trash" onclick="deleteUncompleted(${index})" alt="">
                </div> 
            </div>`;


            });
        
    
}
function renderCompleted(){
    var list2 = document.getElementById("completed");
    list2.innerHTML = completed.map((data2, index) =>{
        return  `
            <div class="holder">
            <input type="checkbox" onclick="taskComplete(this);" class="check">
            <div class="upper">
                <input type="text" value="${data2.task_title}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
                <input type="date" value="${data2.task_date}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
            </div>
            <div class="content">
                <input type="text" value="${data2.task_desc}" class="task1" onfocus="getCurrentTask();" onblur="editTask(this)">
                <img src="images/trash-solid.svg" class="trash" onclick="deleteCompleted(${index})" alt="">
            </div> 
        </div>`;
    }).join("");
}

function markCompleted( index){

    console.log("oinfdex", index);
    index= parseInt(index)
    var taskItem = uncompleted[index]

    console.log("tyytytytty "+index, {taskItem});

    uncompleted.splice(index, 1);
    completed.push(taskItem);
    console.log("Completed", completed);
    console.log("uncompleted", uncompleted);

    retrieveTasks();
    renderCompleted();
}

function deleteCompleted(index){
    completed.splice(index, 1);
    console.log(completed);
    renderCompleted();    
}

function deleteUncompleted(index){
    uncompleted.splice(index, 1);
    retrieveTasks();
}






// const addTask = e =>{
//     // const task = document.querySelector("form input");

//     // Get all the data in the formData otherwise create a new array
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     formData.push({
//             title: document.getElementById('title').value,
//             date: document.getElementById('date').value,
//             desc: document.getElementById('desc').value
//         });
       
//         localStorage.setItem('formData', JSON.stringify(formData));
//         dispatch();
//         document.querySelector('form').reset();
//         document.getElementById('title').focus();
//         e.preventDefault();
// }

// function for retrieving formData and display all the tasks on the page
// function dispatch(){
//     console.log(localStorage.getItem('formData'));
//     if(localStorage.getItem('formData')){
//         var list = document.querySelector("ul");
//         list.innerHTML = "";
//         JSON.parse(localStorage.getItem('formData')).forEach(data =>{
            
//             list.innerHTML += ` 
//             <div class="holder">
//                 <input type="checkbox" onclick="taskComplete(this);" class="check">
//                 <div class="upper">
//                     <input type="text" value="${data.title}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
//                     <input type="date" value="${data.date}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
//                 </div>
//                 <div class="content">
//                     <input type="text" value="${data.desc}" class="task1" onfocus="getCurrentTask();" onblur="editTask(this)">
//                     <img src="images/circle-check-solid.svg" class="trash" onclick="markCompleted(this)" alt="">
//                     <img src="images/trash-solid.svg" class="trash" onclick="removeTask(this)" alt="">
//                 </div> 
//             </div>`;
//         });    
//     }
// }

// function taskComplete(event) {
//     let tasks = Array.from(JSON.parse(localStorage.getItem("formData")));
//     tasks.forEach(task =>{
//         if(task.task === event.nextElementSibling.value){
//             task.completed = !task.completed;

//         }
//     });
//     event.nextElementSibling.classList.toggle("completed");
//     event.nextElementSibling.nextElementSibling.classList.toggle("completed");
//     localStorage.setItem("formData", JSON.stringify(tasks));
// }
// //function to remove a task from the localstorage
// function removeTask(event){
//     //loop through the formData containing the tasks
//     let tasks = Array.from(JSON.parse(localStorage.getItem("formData")));
//     tasks.forEach(task => {
//         //if the current task is equal to the event task.
//             if(task.task === event.value){
//                 // remove the index of that task from the tasks
//                 tasks.splice(tasks.indexOf(task), 1);
//             }
//         // }
//     });
//     // remove the whole event of the task that was deleted
//     event.parentNode.parentNode.remove();
//     console.log(tasks);
//     // update the local storage
//     localStorage.setItem("formData", JSON.stringify(tasks));
// }


// // store the currentTask to track changes
// var currentTask = null;

// // get current task
// function getCurrentTask(event) {
//     currentTask = event.value;
// }

// // edit task and update local storage
// function editTask(event) {
//     // get tasks
//     let tasks = Array.from(JSON.parse(localStorage.getItem("formData")));

//     // check if the task is empty
//     if(event.value === "" ){
//         alert("Task is empty");
//         event.value = currentTask;
//         return;
//     }
//     //task exists
//     tasks.forEach(task => {
//         if(task.task === event.value){
//             alert("Task already exist"); 
//             event.value = currentTask;
//             return;
//         }
//     });

//     // update task status
//     tasks.forEach(task =>{
//         if(task.task == currentTask){
//             task.title = event.title;
//             task.date = event.date;
//             task.desc = event.desc;
//         }
//     });

//     // update local storage
//     localStorage.setItem("formData", JSON.stringify(formData));
// }

// // function taskComplete(event) {
// //     let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
// //     tasks.forEach(task =>{
// //         if(task.task === event.nextElementSibling.value){
// //             task.completed = !task.completed;

// //         }
// //     });
// //     localStorage.setItem("tasks", JSON.stringify(tasks));
// //     event.nextElementSibling.classList.toggle("completed");
// // }



