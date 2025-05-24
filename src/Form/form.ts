import { observable } from "../State/observable";
import { state } from "../State/state";
import { Task} from "../Interface_Type/interface";
import { TasksDisplay } from "../TaskTable/display";





export class Form {
    task:Task = {
        id: Date.now(),
        heading:'',
        description:'',
        date: '',
        priority: 'low',
        completed: false
    };
    tasksDisplay;
    constructor() {
        this.render(); 
        this.tasksDisplay = new TasksDisplay()
    }

    render(){
        return `
                <div class="form-wrapper">
                    <form id="form" >
                            <label for="heading" class="form-label">Heading:</label>
                            <input type="text" id="heading"  class="form-control" name="heading" required>
                            <label for="priority" class="form-label">Priority:</label>
                            <select id="priority"  class="form-control" name="priority">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <div class="date-wrapper" style="width: max-content; height: min-content; border: 1px solid black">
                                <span>Date</>
                                <button class="calendar">&#9660</button>
                            </div>
                            <div>
                                <label for="description" class="form-label">Description</label>
                                <textarea id="description"  class="form-control" name="description"></textarea>
                            </div>
                            <button type="submit" id="submitBtn">Add Task</button>
                    </form>
                </div>        
            `;
    }

    submitForm(event:any){
        event.preventDefault();
        const headingInput = document.querySelector('#heading') as HTMLInputElement;
        const descriptionInput = document.querySelector('#description') as HTMLTextAreaElement;
        const date = document.querySelector('#date') as HTMLInputElement;
        const priorityInput = document.querySelector('#priority') as HTMLSelectElement;

        this.task = {
                id: Date.now(),
                heading: headingInput.value.trim(),
                description: descriptionInput.value.trim(),
                date: "",
                priority: priorityInput.value,
                completed: false,
            };
        
        observable.emit("submitBtn", this.task);
        console.log({ state});
        

        
        const tBody = document.querySelector(".tBody") as HTMLTableElement;
        const row = document.createElement("tr") as HTMLTableRowElement
        row.innerHTML = `
                <td>
                    <input type="checkbox" class="complete" name="complete" value="${this.task.id}"/>
                </td>
                <td>${this.task.heading}</td>
                <td>${this.task.priority}</td>
                <td>${this.task.date}</td>
            `
        tBody.appendChild(row)
            
        
        //reset the values
        headingInput.value = '';
        descriptionInput.value = '';
        priorityInput.value = 'low';
    }

    displayTask(){
        
    }
      
}




/*
 ● Heading
 ● Description
 ● Date
 ● Priority (dropdown list with more than one value) After adding a
 task to the list, the form fields are reset (clean) to their initial value
 (all except the date) */