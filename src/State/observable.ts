class  Observable {
    state: any;
    constructor(){
        this.state = {
            data: []
        };
    }

    subscribe(event: string, handler: any){
        if(this.state[event]){
            this.state[event].push(handler)
        }else{
            this.state[event] = [handler]
        }

    }

    emit(event:any, data:any){
        if(this.state[event]){
            this.state[event].forEach((callBack: any)=> callBack(data))
        }

    }
}

export const observable = new Observable()