
let formNameField = document.querySelector('#formNameField');
let errMsg = document.querySelector('#formSpan');
let descriptionField = document.querySelector('#descriptionField');
let assigned = document.querySelector('#assigned');
let duedate = document.querySelector('#duedate');
let status = document.querySelector('#status');
let confirmButton = document.querySelector('#confirmButton');
let closeButton = document.querySelector('#closeButton');
let resetButton = document.querySelector('#resetButton');
var myModal = new bootstrap.Modal(document.getElementById('exampleModal')); 
let taskDone = document.querySelector('#task_list');
let today = new Date();
            var dd = today.getDate();
           var mm = today.getMonth()+1; 
           var yyyy = today.getFullYear();
              if(mm<10) 
               {
                   mm='0'+mm;
               }
           today = yyyy + "-" + mm + "-" + dd;
  //  console.log(today);

//Object Instance to the class
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();

function validate() {
    
    //console.log("In function validate");
    if(formNameField.value == 0) {
        errMsg.innerHTML = "Name field cannot be empty";
        errMsg.style.color = "red";
    } else if(formNameField.value.length <=5) {
        errMsg.innerHTML = "Name should be minimum 6 characters";
        errMsg.style.color = "red";
    } else if(descriptionField.value == 0) {
        errMsg.innerHTML = "Description value cannot be empty";
        errMsg.style.color = "red";
    } else if(descriptionField.value.length <=8) {
        errMsg.innerHTML = "Description should be minimum 8 characters";
        errMsg.style.color = "red";
    } else if(assigned.value == 'Choose from') {
        errMsg.innerHTML = "Please select Assignee";
        errMsg.style.color = "red";
        } else if(duedate.value == 0) {
        errMsg.innerHTML = "Select due Date";
        errMsg.style.color = "red";
    } else if(duedate.value < today)  {
               errMsg.innerHTML = "Please select a valid date";
               errMsg.style.color = "red";
    } else if(status.value == 'Select Status from') {
        errMsg.innerHTML = "Please select status to the task";
        errMsg.style.color = "red";
    } else {
        errMsg.innerHTML = "";
        //alert(myModal);
        myModal.hide();
        toAddTasks();
        reset();
       
    }
 }
function reset() 
    {
         formNameField.value = "" ;
         descriptionField.value = "";
         assigned.value = "";
         duedate.value = "";
         status.value = "";
     }
 function close() {
     console.log("In close function");
     exampleModal.innerHTML = window.location.assign(window.location.href);

 }    
function toAddTasks() 
{
        
        taskManager.addTask(formNameField.value,descriptionField.value,assigned.value,duedate.value,status.value);
       // close();
        taskManager.render();
        taskManager.save();
        taskManager.getTaskById(0);
                
}

confirmButton.addEventListener('click', validate);
confirmButton.addEventListener('click',(e)=>{e.preventDefault();});
resetButton.addEventListener('click',reset);
// Done button event
taskDone.addEventListener('click', (event) => {
        if(event.target.classList.contains("done-button"))
         {
        //console.log("When done button is clicked");
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = "Done";
         taskManager.render();
          taskManager.save();
         }
         if(event.target.classList.contains("delete-button")) 
         {
            // console.log("in delete event");
            const deleteTask = event.target.parentElement.parentElement.parentElement.parentElement;
            console.log(deleteTask);
            const taskId = Number(deleteTask.dataset.taskId)
            //console.log(taskId);
            taskManager.deleteTask(taskId);
            taskManager.save();
            taskManager.render();
         }
});
 







