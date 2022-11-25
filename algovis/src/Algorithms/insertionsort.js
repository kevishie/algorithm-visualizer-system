export function insertionSort(array){
    let length = array.length;
    let arrays=[];
    arrays.push(array.slice(0));
    for(let i=1;i<length;i++){
        let current = array[i];
        let j = i-1;
        while((j > -1) && (current < array[j])) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
        arrays.push(array.slice(0));
    }
    return arrays;
}

export const name = "Insertion Sort";