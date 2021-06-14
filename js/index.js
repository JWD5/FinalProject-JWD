
let formNameField = document.querySelector('#formNameField');
let errMsg = document.querySelector('#formSpan');
let descriptionField = document.querySelector('#descriptionField');
let assigned = document.querySelector('#assigned');
let duedate = document.querySelector('#duedate');
let status = document.querySelector('#status');
let confirmButton = document.querySelector('#confirmButton');

//Object Instance to the class
const taskManager = new TaskManager(0);

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
    } else if(status.value == 'Select Status from') {
        errMsg.innerHTML = "Please select status to the task";
        errMsg.style.color = "red";
    } else {
        errMsg.innerHTML = "";
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
     
function toAddTasks() 
{
        //const taskManager = new TaskManager(0);
        console.log(taskManager);  
        //console.log(taskManager.incrementID());
       taskManager.addTask(formNameField.value,descriptionField.value,assigned.value,duedate.value,status.value);
        console.log(taskManager.tasks);
        
}

confirmButton.addEventListener('click', validate);
confirmButton.addEventListener('click',(e)=>{e.preventDefault();});


