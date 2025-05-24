export const getPrevDates = (dayIndex:number, year:number, month:number)=>{
    let acc = [];
    for (let i = dayIndex; i > 0; i--) {
        const prevDate = new Date(year, month, 0 - i + 1);
        const day = document.createElement("span");
        day.textContent = `${prevDate.getDate()}`;
        day.classList.add('day','d-flex-center','inactive');
        day.style.width = "30px";
        day.style.height = "30px";
        day.style.marginRight = "10px"
        acc.push(day);
    }
    
    return acc;
};

export const getNextDates = (dayIndex:number, year:number, month:number)=>{
    let acc = [];
    for (let i = 1; i <= dayIndex; i++) {
        const nextDate = new Date(year, month + 1, i);
        const day = document.createElement("span");
        day.textContent = `${nextDate.getDate()}`;
        day.classList.add('day','d-flex-center','inactive');
        day.style.width = "30px";
        day.style.height = "30px";
        day.style.marginRight = "10px"
        acc.push(day);
    }

    return acc;
};

export const getCurrentDates = (currentDate:number,year:number,month: number)=>{
    let acc = [];
    const today = new Date();

    for(let i = 1; i <= currentDate; i++){
        const day = document.createElement("span");
        day.textContent = `${i}`;
        day.setAttribute("data_id", `${year}-${month + 1}-${i}`);
        day.style.width = "30px";
        day.style.height = "30px";
        day.style.marginRight = "10px";
        day.style.color = "blue";
        day.style.cursor = "pointer";

        day.classList.add('day','d-flex-center');

        if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
            day.classList.add('current-date');
            day.style.color = "green"
        }
        acc.push(day);
    }

     return acc   
};

export const getDate = (year:number, month:number)=>{
    let days = [];
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year_month:string = `${monthsList[month]}  ${year}`;
    const firstDay:number = new Date(year, month, 1).getDay();
    const daysInMonth:number = new Date(year, month + 1, 0).getDate();
    const lastDay:number = new Date(year, month + 1, 0).getDay();


    days.push(...getPrevDates(firstDay,year, month));
    days.push(...getCurrentDates(daysInMonth, year, month));
    days.push(...getNextDates(lastDay,year, month));
        

    return {
        year_month,
        days,
    }
}







