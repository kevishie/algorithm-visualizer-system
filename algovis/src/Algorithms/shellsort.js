
export function shellsort(array){
    let n = array.length;
    let arrays = [];
    arrays.push(array.slice(0));
            for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap / 2)){
                for(let i = gap; i < n; i++){
                    let temp = array[i];
                    let j;
                    for(j = i; j >= gap && array[j-gap] > temp; j -= gap){
                        array[j] = array[j-gap];
                        
                       
                    }
                    array[j] = temp;   
                    arrays.push(array.slice(0));
                } 
                
            }

    console.log(arrays);
    return arrays;
} export const name = "Shell sort";