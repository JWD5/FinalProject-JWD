
class TaskManager {
    constructor(current_id = 0) {
            this._tasks = [];
            this._current_id = current_id;
    }
     get tasks() {
         return this._tasks;
     }
     get current_id() {
         return this._current_id;
     }
     addTask(name,description,assignedTo,dueDate,status) 
    {
        const taskList = {
            id: this._current_id++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
        
        this._tasks.push(taskList);
        console.log(taskList);
        //console.log("Array is ");
        //console.log(this._tasks);
        
    }

 //Render method to display tasks   
    render()
     {
        let tasksHtmlList = [];
        //console.log(this._tasks.length);
         for (let i = 0; i < this._tasks.length; i++) 
         {
          const myTask = this._tasks[i];
          console.log(myTask);
           console.log(myTask.name);
         
       const date = new Date(myTask.dueDate);
       const month = date.toLocaleString('default', {month: 'short'});
       //console.log(month);
    //    today.toLocaleString('default', { month: 'short' })
    const formattedDate = date.getDate() + "/" + month + "/" + date.getFullYear();
    
         //console.log(myTask);
         console.log(formattedDate);
             const taskHtml = createTaskHtml(myTask.name,myTask.description,myTask.assignedTo,formattedDate,myTask.status);
          
           tasksHtmlList.push(taskHtml);
           console.log(tasksHtmlList);
         }
        const tasksHtml = tasksHtmlList.join("\n");
  //      console.log(tasksHtml);
         const tasksList = document.querySelector('#task_list');
         tasksList.innerHTML = tasksHtml;
      }    
        
}

function createTaskHtml(name,description,assignedTo,dueDate,status) 
 {
   console.log(name);
    const html = `<li class="card" style="min-width: 50vw">
    <div class="card-body">
      <h5 class="card-title">Name : ${name}</h5>
      <p class="card-text"> Description : 
        ${description}
      </p>
      <p class="card-text">Assigned To : ${assignedTo} </p>
      <p class="card-text">Due Date: ${dueDate}</p>
      <div class="card-footer row">
        <div class="col-6">
          <p class="card-text"><b>Status of the Task is : ${status}</b></p>
        </div>
        <div class="col-3">
          <button class="btn btn-outline-success done-button">
            Done
          </button>
        </div>
        <div class="col-3">
          <button class="btn btn-outline-danger delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  </li>`;
 //console.log(html);
  return html;
}
