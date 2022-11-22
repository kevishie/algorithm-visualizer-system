import { selectionSort } from './Algorithms/selectionSort'
import { bubbleSort } from './Algorithms/bubbleSort'

export function runAlgorithm(selection, values){
    switch(selection){
        case "selectionSort":
            return selectionSort(values);
            break;
        case "bubbleSort":
            return bubbleSort(values);
            break;

    }
    return;
}