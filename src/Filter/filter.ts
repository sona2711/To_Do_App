import { Task } from "../Interface_Type/interface";
import { state } from "../State/state";
import { TasksDisplay } from "../TaskTable/display";




export class TaskFilter {

    filterByDate(dateFrom: string, dateTo: string) {
        if(dateFrom || dateTo){
            return state.data?.filter((task: Task) => task.date > dateFrom && task.date< dateTo);// not correct, i need to find all tasks in the scope off dateFrom - dateTo
        }
    }

    filterByText(event: any){
        const searchText = event.target.value;
        const tBody = document.querySelector(".tBody") as HTMLTableElement;
        const rows= tBody.querySelectorAll("tr");
        console.log(rows)
        const list = state.data.filter((task:Task)=> {
            return task.heading.toLowerCase().includes(searchText.toLowerCase()) ||
                task.description.toLowerCase().includes(searchText.toLowerCase());
        });
    
        rows.forEach((row)=>{
            let id = row.getAttribute("id");
            list.forEach((task)=> {
                if(task.id == id){
                    console.log(row);
                    row.style.display = "";
                }else{
                    row.style.display = "none";
                }
            })
        })
        
        const display = new TasksDisplay()
        const completeCheckboxs = document.querySelectorAll(".complete");
        completeCheckboxs?.forEach((checkbox) => {
            checkbox.addEventListener('change', display.completeTask);
        })
        
        return list
    
    }

    showCompletedTasks(event:any) {
        const tBody = document.querySelector(".tBody") as HTMLTableElement;
        const rows= tBody.querySelectorAll("tr");
        if(event.target.checked){
            console.log(state.data)
            const list = state.data.filter((task: Task) => {
                return task.completed === true;
            });
            rows.forEach((row)=>{
            let id = row.getAttribute("id");
            list.forEach((task)=> {
                if(task.id == id){
                    console.log(row);
                    row.style.display = "block";
                    
                }else{
                    row.style.display = "none";
                }
            })
        })
        //     const display = new TasksDisplay()
        //     const tBody = document.querySelector(".tBody") as HTMLTableElement;
        //     display.display(list,tBody);

        //     const completeCheckboxs = document.querySelectorAll(".complete");
        //     completeCheckboxs?.forEach((checkbox) => {
        //     checkbox.addEventListener('change', display.completeTask);
        // })
        }
    }
    forwardByTitle(){
        console.log("hello")
        return state.data.sort((task1: Task, task2:Task) => {
                return task1.heading.toLowerCase().localeCompare(task2.heading.toLowerCase())
            });
        } 
    
    reverseByTitle(){
        console.log("hello")
        return state.data.sort((task1: Task, task2:Task) => {
                return task2.heading.toLowerCase().localeCompare(task1.heading.toLowerCase())
            });
    }

    forwardByDone(){
     
    }
    reverseByDone(){
        
    }
    forwardByPriority(){

    }
    reverseByPriority(){
      
    }

    forwardByDate(){

    }
    reverseByDate(){
      
    }
}



/*
The filter controls which tasks will be available in the list below. The filter
 allows you to adjust the following settings
 ● whether to show completed tasks
 ● text search (case insensitive, search in both title and description)
 ● filter by date (minimum and maximum dates- both can be
 specified, one can be any, none
  */