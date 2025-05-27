import { ICalendar } from "../Interface_Type/interface";
import { getDate} from "./utils";



export class CalendarApp implements ICalendar{
    container;
    current_date;
    current_year;
    current_month;
    parentNode;
    value: string | undefined;

    constructor(selector:string){
        this.parentNode = document.querySelector(selector) as HTMLDivElement;
        this.container = document.createElement("div") as HTMLDivElement;
        this.container.className = "container";

        this.current_date = new Date();
        this.current_year = this.current_date.getFullYear();
        this.current_month = this.current_date.getMonth();
        this.value = "";
        this.render();
    }

    getPrevMonth (){
        this.current_month--;
        if (this.current_month < 0) {
                this.current_month = 11;
                this.current_year--;
        }
        return this.render();
    };

    getNextMonth(){
        this.current_month++;
        if (this.current_month > 11) {
          this.current_month = 0;
          this.current_year++;
        }
        
        return this.render();
    } 
       
    render(): void{
        const currentDate = getDate(this.current_year,this.current_month);
        const days = currentDate.days;
        this.container.innerHTML = `
            <div class="calendar-wrapper d-flex-center"  style="display: flex;flex-direction: column; gap: 5px; padding: 10px;">
                <div class="month-year-wrapper" style=" display:flex; justify-content: space-around;align-items: center;gap: 5px">
                    <button class="prev-btn btn">&#8678</button>
                    <h2 class="month-year">${currentDate.year_month}</h2>
                    <button class="next-btn btn">&#8680</button>
                </div>
                <div class="week-days" style="display: flex; justify-content: space-between;">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tues</span>
                    <span>Wed</span>
                    <span>Thurs</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>
                <div id="days-wrapper" style="display: grid; grid-template-columns: repeat(7, 1fr);"></div>   
            </div>              
        `;
                        
        const days_wrapper = document.querySelector('#days-wrapper') as HTMLDivElement;
        days_wrapper?.append(...days);
        document.querySelector('.prev-btn')?.addEventListener('click', this.getPrevMonth );
        document.querySelector('.next-btn')?.addEventListener('click', this.getNextMonth);

        const activeDays = document.querySelectorAll(".day:not(.inactive)");
        activeDays.forEach((day) => {
            day.addEventListener("click", (event: Event):string | undefined=>{
                const value = (event.target as HTMLElement).attributes.getNamedItem("data_id")?.value ;
                const date_wrapper = document.querySelector('#date') as HTMLDivElement;
                value ?  date_wrapper?.setAttribute("value", value): date_wrapper.setAttribute("value", "");

                const container = document.querySelector('.container') as HTMLButtonElement;
                date_wrapper?.removeChild(container);
                return value;
                
            })
        })

        this.parentNode?.append(this.container);
    }

}


