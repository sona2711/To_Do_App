import { observable } from "../State/observable";
import { state } from "../State/state";
import { Task} from "../Interface_Type/interface";
import { TasksDisplay } from "../TaskTable/display";
import { Validator } from "../Validation/validation";
import { StorageService} from "../Storage/storage";




export class Form {
    task:Task = {
        id: Date.now(),
        heading:'',
        description:'',
        date: '',
        priority: '',
        completed: false
    };
   
    tasksDisplay;
    constructor() {
        this.render(); 
        this.tasksDisplay = new TasksDisplay();
    }

    render(){
        return `
                <div class="form-wrapper">
                    <form id="form" >
                            <label for="heading" class="form-label">Heading:</label>
                            <input type="text" id="heading"  class="form-control" name="heading">
                            <label for="priority" class="form-label">Priority:</label>
                            <select id="priority"  class="form-control" name="priority">
                                <option value=""></option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <div id="date" style="width: max-content; height: min-content; border: 1px solid black">
                                <span>Date</>
                                <span class="calendar">&#9660</span>
                            </div>
                            <div>
                                <label for="description" class="form-label">Description</label>
                                <textarea id="description"  class="form-control" name="description"></textarea>
                            </div>
                            <div class="error-wrapper">
                                <p id="error"></p>
                            <div>    
                            <button type="submit" id="submitBtn">Add Task</button>
                    </form>
                </div>        
            `;
    }
    
    submitForm(event:any){
        event.preventDefault();
        const headingInput = document.querySelector('#heading') as HTMLInputElement;
        const descriptionInput = document.querySelector('#description') as HTMLTextAreaElement;
        const date = document.querySelector('#date') as HTMLDivElement;
        const priorityInput = document.querySelector('#priority') as HTMLSelectElement;
        const  taskList: Task[] =  JSON.parse(StorageService.getItem("tasks")|| "[]")//namespase method usage

        console.log({
            heading: headingInput?.value.trim(),
            description: descriptionInput?.value.trim(),
            date: date?.getAttribute("value") || "",
            priority: priorityInput?.value,
        })

        const validator = new Validator();
        const isValid = validator.createError({
            heading: headingInput?.value.trim(),
            description: descriptionInput?.value.trim(),
            date: date?.getAttribute("value") || "",
            priority: priorityInput?.value,
        },"error") as Boolean
        console.log(isValid)
        
       if(isValid){
            this.task = {
                    id: Date.now(),
                    heading: headingInput.value.trim(),
                    description: descriptionInput.value.trim(),
                    date: date.getAttribute("value") || "",
                    priority: priorityInput.value,
                    completed: false,
                };


            observable.emit("submitBtn", this.task);
            console.log({ state});

            //Storage part
            taskList.push(this.task);
            StorageService.setItem("tasks", JSON.stringify(taskList))
        
        
            const tBody = document.querySelector(".tBody") as HTMLTableElement;
            const row = document.createElement("tr") as HTMLTableRowElement;
            
            // state.data return back after hw checked
            taskList?.forEach((task)=> {
                if(task.id !== row.getAttribute("id") ){
                    row.setAttribute("id", `${task.id}`)
                    row.innerHTML = `
                        <td>
                            <input type="checkbox" class="complete" name="complete" value="${task.id}"/>
                        </td>
                        <td>${task.heading}</td>
                        <td>${task.priority}</td>
                        <td>${task.date}</td>
                    `
                    tBody.appendChild(row)
                }
            })
        
            const display = new TasksDisplay()
            const completeCheckboxs = document.querySelectorAll(".complete");
            completeCheckboxs?.forEach((checkbox) => {
                checkbox.addEventListener('change', display.completeTask);
            })  
        }
    
    
        //reset the values
        headingInput.value = '';
        descriptionInput.value = '';
        priorityInput.value = '';
    }
      
}




