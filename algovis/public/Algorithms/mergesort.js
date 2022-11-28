
let arrays = [];
export function mergeSort(array){
    let low =0;
    let high = array.length -1;
    start(array,low,high);
    return arrays;
function start(array, low, high){
    if(low < high ){
        let mid = parseInt(((low + high)/2).toString());
        start(array, low, mid);
        start(array, mid + 1, high);
        merge(array, low, mid, high)
        arrays.push(array.slice());
    }
}

//merge funct
function merge(arr, low, mid, high){
    let n1 = mid - low + 1;//size of the left array
    let n2 = high - mid;//size of the right array

    //temporary arrays
    let tempL = new Array(n1);
    let tempR = new Array(n2);

    //initialize the tempL
    for(let i = 0; i < n1; i++){
        tempL[i] = arr[low + i];
    }
    //initialize the tempR
    for(let j = 0; j < n2; j++){
        tempR[j] = arr[mid + 1 + j];
    }

    //initial values for the left, right, and arr array
    let i = 0;
    let j = 0;
    let k = low; 

    //while loop will merge the left and right arrays into one array.
    while(i < n1 && j < n2){
        if(tempL[i] <= tempR[j]){
            arr[k] = tempL[i];
            i++;
        }
        else{
            arr[k] = tempR[j];
            j++;
        }
        k++;
        arrays.push(arr.slice());
    }

    //will merge any remaining elements into the left side of the arr
    while(i < n1){
        arr[k] = tempL[i];
        i++;
        k++;
        arrays.push(arr.slice());
    }

    //will merge any remaining elements into the right side of the arr
    while(j < n2){
        arr[k] = tempR[j];
        j++;
        k++;
        arrays.push(arr.slice());
    }
} 
} 
export const name = "Merge Sort";