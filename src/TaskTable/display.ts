import { Task } from "../Interface_Type/interface";
import { state } from "../State/state";




export class TasksDisplay {
    table: HTMLTableCaptionElement;
    filteredTasks: Task[]
    constructor(){ 
        this.filteredTasks = [];
        this.table = document.createElement("table");
        this.table.classList = "table table-info table-hover"
        this.render()
    }

    render(){
      this.table.innerHTML = `
        <thead>
             <tr>
                <th>
                    <div class="title-wrapper">
                        <span>Done</span>
                        <span class="btn-wrapper">
                            <button id="fw-byDone" class="btn-sort"> &#9650</button>
                            <button id="fw-byDone" class="btn-sort">&#9660</button>
                        </span>  
                    </div>      
                </th>
                <th>
                    <div class="title-wrapper">
                        <span>Title</span>
                        <span class="btn-wrapper">
                            <button id="fw-byTitle" class="btn-sort"> &#9650</button>
                            <button id="bw-byTitle" class="btn-sort"> &#9660</button>
                        </span>  
                    </div>      
                </th>
                <th>
                    <div class="title-wrapper">
                        <span>Priority</span>
                        <span class="btn-wrapper">
                            <button id="fw-byPriority" class="btn-sort"> &#9650</button>
                            <button id="bw-byPriority"class="btn-sort"> &#9660</button>
                        </span>  
                    </div>      
                </th>
                <th>
                    <div class="title-wrapper">
                        <span>Date</span>
                        <span class="btn-wrapper">
                            <button id="fw-byDate" class="btn-sort" > &#9650</button>
                            <button id="bw-byDate" class="btn-sort"> &#9660</button>
                        </span>  
                    </div>      
                </th>
            </tr>
        </thead> 
        <tbody class="tBody"></tbody>
        `
        return this.table
    }

    // display(filteredList: Task[], element: HTMLTableElement){
    //     this.filteredTasks = filteredList
    //     filteredList.forEach((task)=>{
    //         const row = document.createElement("tr") as HTMLTableRowElement
    //         row.innerHTML = `
    //             <td>
    //                 <input type="checkbox" class="complete" name="complete" value="${task.id}"/>
    //             </td>
    //             <td>${task.heading}</td>
    //             <td>${task.priority}</td>
    //             <td>${task.date}</td>
    //         `
    //         element.appendChild(row)
    //     })

    //     return element
    // }

    completeTask(event:any){
        const row = event.target.parentNode.parentNode;
        if(event.target.checked){
            row.classList.add("table-success");
            console.log(row)
            const id = event.target.defaultValue;
            console.log( id)
            return state.data.find((task)=> {
                  console.log( task.id)
                if(task.id == id){
                    task.completed = true;
                    
                }
                console.log(task)
            })
        }else{
            row.classList.remove("table-success");
            console.log(row);
        }

    }
}