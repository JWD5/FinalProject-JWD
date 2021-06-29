
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
      const formattedDate = date.getDate() + "/" + month + "/" + date.getFullYear();
    
         //console.log(myTask);
         console.log(formattedDate);
             const taskHtml = createTaskHtml(myTask.id,myTask.name,myTask.description,myTask.assignedTo,formattedDate,myTask.status);
         
           tasksHtmlList.push(taskHtml);
    //       console.log(tasksHtmlList);
         }
        const tasksHtml = tasksHtmlList.join("\n");
  //      console.log(tasksHtml);
         const tasksList = document.querySelector('#task_list');
         tasksList.innerHTML = tasksHtml;
      } 
      // Getting the task with Status Done
      getTaskById(taskId) 
      {
        console.log("in get task function");
          let foundTask;
          for(let i=0; i< this._tasks.length; i++) {
              const task = this._tasks[i];
              if(task.id == taskId) {
                  foundTask = task;
              }
          }
          console.log(foundTask);
          return foundTask;
      }   
      // To add data to Local Storage
      save() {
        var tasksJson = JSON.stringify(this._tasks);
        localStorage.setItem("tasks", tasksJson);
        var currentId = JSON.stringify(this._current_id);
        localStorage.setItem("currentId" ,currentId);
      }

      // Retrieving data from Local Storage
      load() {
        
        if (localStorage.getItem("tasks")) 
        {
          const tasksJson = localStorage.getItem("tasks") || [];
         this._tasks = JSON.parse(tasksJson);
        }
      if (localStorage.getItem("currentId")) {
          const currentId = localStorage.getItem("currentId");
          this._currentId = Number(currentId);
      }
    }
    // Delete Task function
    deleteTask(taskId) 
    {
      let newTasks = [];
      for(let i=0; i < this._tasks.length; i++) 
      {
        const task = this._tasks[i];
        
        if(task.id !== taskId) {
          newTasks.push(task);
        }
      }
     this._tasks = newTasks; 
    }
}
function createTaskHtml(id,name,description,assignedTo,dueDate,status) 
 {
    const html = `<li class="card" data-task-id="${id}" style="min-width: 50vw">
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
        <button class="btn btn-outline-success done-button ${
            status === "todo" || status === "progress" || status === "review"
              ? "visible"
              : "invisible"
          }" id="doneId">
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
