
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
            FirstName : firstName,
            Description : description,
            AssignedTo : assignedTo,
            DueDate : duedate,
            TaskStatus : taskStatus,
        };
        this._tasks.push ({ taskList });
        console.log("tasks added are" + this._tasks);
    }
    
}

