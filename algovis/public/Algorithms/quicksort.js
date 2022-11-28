//swaps two items based on the given left and right indicies (needed for partition())
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
//pivots two elements based on the left and right around the middle element (needed for quickSortInner())
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}
//main recursive quicksort function (Not to be run by itself)
function quickSortInner(items,arrays, left, right) {
    var index;
    
    
    if (items.length > 1) {
        arrays.push(items.slice(0));
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortInner(items,arrays, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortInner(items,arrays, index, right);
        }
    }
    
    return items;
}
//Main algorithm funciton to run with visualizer
export function quickSort(array){
    var arrays = [];
    quickSortInner(array,arrays, 0, array.length - 1);
    arrays.pop();

    return arrays;
}


export const name = "Quick Sort";



