type Id  = string | number;


export type Task = {
    id: Id;
    heading: string;
    description: string;
    date: string;
    priority: string;
    completed?: boolean;
}

export interface IState{
    data: Task[]
}

// export interface IForm {
//     task:Task;
//     form: HTMLFormElement;
//     render:string () => string;
//     submitForm:() => void;
// }

