export class FilterUI {
    constructor(){
        this.render();
    }

    render(){
        return `
                <div class="filters-container">
                    <div class="filter-wrapper">
                        <input type="checkbox" id="showCompleted"name="showCompleted" />
                        <label for="showCompleted"> Show Completed </label>
                        <input type="date" id="date_from" name="dateFrom" placeholder="Date from"/>
                        <input type="date" id="date_to" name="dateTo" placeholder="Date to"/>
                    </div>  
                    <div class="filter-wrapper"> 
                        <input id="text_filter" placeholder="Search text..."
                    </div> 
                </div>       
            `  
    }
}



