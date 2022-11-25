import { selectionSort } from './Algorithms/selectionSort'
import { bubbleSort } from './Algorithms/bubbleSort'
import { insertionSort } from './Algorithms/insertionsort';


export function runAlgorithm(selection, values){
    switch(selection){
        case "selectionSort":
            return selectionSort(values);
            break;
        case "bubbleSort":
            return bubbleSort(values);
            break;
        case "insertionSort":
            return insertionSort(values);
            break;

    }
    return;
}