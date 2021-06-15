function createTaskHtml(name,description,assignedTo,dueDate,status) 
{
    const html = ` <li class="card" style="min-width: 50vw">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">
        ${description}
      </p>
      <p class="card-text">${assignedTo} To</p>
      <p class="card-text">${dueDate}</p>
      <div class="card-footer row">
        <div class="col-6">
          <p class="card-text"><b>${status}</b></p>
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
    return html;
}
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
     addTask(firstName,description,assignedTo,dueDate,taskStatus) 
    {
        const taskList = {
            incrementID : this._current_id ++,
            firstName : firstName,
            description : description,
            assignedTo : assignedTo,
            dueDate : dueDate,
            taskStatus : taskStatus,
        };
        console.log(this._tasks);
        this._tasks.push({taskList});
        // for(let i=0;i<this._tasks.length;i++) {
       console.log("tasks added are" + this._tasks); 
       console.log(taskList);
        // }
        //console.log(dueDate);
    }

 //Render method to display tasks   
    render() {
        console.log("in render function");
        const tasksHtmlList = [];
        for(let i=0; i <= this._tasks.length ; i++) {
            let currentTask = this._tasks[i];
            const dateVar = new Date(this.dueDate);
            const formattedDate = dateVar.getDate() + "/" + (dateVar.getMonth() + 1) + "/" + dateVar.getFullYear();
            console.log("Formatted date is " + formattedDate);
            const taskHtml = createTaskHtml(
                currentTask.firstName ,
                currentTask.description , 
                currentTask.assignedTo , 
                formattedDate, 
                currentTask.status);
        
        tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join("\n");
        const task_list = document.querySelector('#task_list');
        task_list.innerHTML = tasksHtml;
        console.log("Tasks HTML List is " + tasksHtmlList);
    }
}       

