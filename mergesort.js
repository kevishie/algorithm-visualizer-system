
//mergeSort funct
function mergeSort(arr,left,right){

    while(left.length && right.left){
        if(left > right){
            return;
        }

        let mid = (left+right)/2;//to get the middle idex 
        mergeSort(arr,left,mid);//will mergeSort from the left to the middle index
        mergeSort(arr,m+1,right);//will mergeSort from the middle to right index
        merge(arr,left,mid,right);//once recursion is completed then will finally merge the two sorted arrays together
    }

}

//merge funct
function merge(arr, left, mid, right){
    let n1 = mid - 1 + 1;//size of the left array
    let n2 = right - mid;//size of the right array

    //temporary arrays
    let tempL = [n1];
    let tempR = [n2];

    //initialize the tempL
    for(let i = 0; i < n1; i++){
        tempL[i] = arr[l+i];
    }
    //initialize the tempR
    for(let j = 0; j < n2; j++){
        tempR[j] = arr[mid + 1 + j];
    }

    //initial values for the left, right, and arr array
    let i = 0;
    let j = 0;
    let k = 0; 

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
    }

    //will merge any remaining elements into the left side of the arr
    while(i < n1){
        arr[k] = tempL[i];
        i++;
        k++;
    }

    //will merge any remaining elements into the right side of the arr
    while(j < n2){
        arr[k] = tempR[j];
        j++;
        k++;
    }
}