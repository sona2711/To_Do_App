export class Validator {
    createError(task: { [key: string]: string }, errorElem: string): Boolean{
        const errorEl = document.getElementById(errorElem) as HTMLElement;
        const isValid = false;
    
        for(const key in task){
            // if (task.hasOwnProperty(key)){
                if(task[key] == ""){
                    const elem = document.getElementById(`${key}`) as HTMLElement;
                    this.showError(elem, key, errorEl);
                    return isValid;
                }else {
                    const elem = document.getElementById(`${key}`) as HTMLElement;
                    this.removeError(elem, errorEl);
                    return !isValid;
                }
            // }
        }
        return isValid
    }

    showError(htmlElem: HTMLElement, key: string, errElem: HTMLElement):void{
        htmlElem.classList.add("error");
        errElem.textContent =  `Please fill the field, the ${key} is required.`;
        errElem.style.color = "red";

    }

    removeError(htmlElem:HTMLElement, errElem: HTMLElement):void{
        htmlElem.classList.remove("error");
        errElem.textContent = "";
    }
}
