import {Form } from "./Form/form";
import { FilterUI } from "./Filter/filterUI";
import { TaskFilter } from "./Filter/filter";
import { TasksDisplay } from "./TaskTable/display";
import { Task } from "./Interface_Type/interface";


import "./style.css";
import { observable } from "./State/observable";
import { state } from "./State/state";

class ToDoApp{
    form;
    filter;
    tasksDisplay;
    taskFilter: TaskFilter;
    constructor(){
        this.form  = new Form();
        this.filter = new FilterUI();
        this.taskFilter = new TaskFilter();
        this.tasksDisplay = new TasksDisplay();
        this.render();
    }

    render(){
        document.body.innerHTML += this.form.render();
        document.body.innerHTML += `<br>`
        document.body.innerHTML += this.filter.render();
        document.body.innerHTML += `<br>`
        document.body.appendChild(this.tasksDisplay.render());
       
        this.createEventListeners();
      
    }

    createEventListeners(){
        observable.subscribe("submitBtn", (task: Task)=> {
            state.data.push(task);
            console.log("task add")
        })
        const submitBtn = document.querySelector('#form') as HTMLFormElement;
        submitBtn.addEventListener('submit',this.form.submitForm);



        const checkbox = document.getElementById("showCompleted") as HTMLInputElement;
        checkbox?.addEventListener('change', this.taskFilter.showCompletedTasks);

        const dateFrom = document.getElementById("date_from") as HTMLInputElement;
        const dateTo = document.getElementById("date_to") as HTMLInputElement;

        // this.taskFilter.filterByDate(dateFrom?.value, dateTo?.value);

        const textFilter = document.getElementById("text_filter") as HTMLInputElement;
        textFilter?.addEventListener("input", this.taskFilter.filterByText);

        const completeCheckboxs = document.querySelectorAll(".complete");
        completeCheckboxs?.forEach((checkbox) => {
            checkbox.addEventListener('change', this.tasksDisplay.completeTask);
        })


        const fw_byTitle = document.getElementById('fw-byTitle') as HTMLButtonElement;
        fw_byTitle.addEventListener("click", this.taskFilter.forwardByTitle);

        const bw_byTitle = document.getElementById('bw-byTitle') as HTMLButtonElement;
        bw_byTitle.addEventListener("click", this.taskFilter.reverseByTitle);

    
    }
}

const toDoApp= new ToDoApp();


// Unscoped package
// npm uninstall -g <package_name>
// Scoped package
// npm uninstall -g <@scope/package_name>