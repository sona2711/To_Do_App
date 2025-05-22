import { state } from "../State/state";
import { Task } from "../Interface_Type/interface";

export class SortBy {
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