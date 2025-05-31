export namespace StorageService {
    export function setItem(key: string, value: string){
        // if(key && value){
            
          
            return localStorage.setItem(key, value);
        // }
    }
    export function getItem(key: string): string | null{
        return localStorage.getItem(key);
    }
    export function clear(){
        return localStorage.clear();
    }
}