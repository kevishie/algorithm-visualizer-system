export function oddevensort(array){
    let sorted = false;
    let arrays = [];
    while(!sorted){
        for(let i = 0; i < array.length; i++){
            sorted = true;
            for(let i = 1; i < array.length - 2; i +=2){
                if(array[i] > array[i+1]){
                    let temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    sorted = false;
                }
                
            }
            for(let i = 0; i < array.length - 2; i += 2) {
                if(array[i] > array[i+1]){
                    let temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    sorted = false;
                    
                }
            }
            arrays.push(array.slice(0));
        }
        
    }
    return arrays;
}
export const name = "Odd even sort";