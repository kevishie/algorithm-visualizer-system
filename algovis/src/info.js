import { insertionSort } from "./Algorithms/insertionsort";
import { selectionSort } from "./Algorithms/selectionSort";
import { bubblesort } from "./Algorithms/bubblesort";
import { oddevensort } from "./Algorithms/oddevensort";

export function runtime(selection){
    switch(selection){
        case selectionSort:
            return "selectionsortruntime";
        case insertionSort:
            return "insertionsortruntime";
        case bubblesort:
            return "bubblesortRuntime";
        case oddevensort:
            return "oddevensortRuntime";
    }
}

export function information(selection){
    switch(selection){
        case selectionSort:
            return "selectionsortruntime";
        case insertionSort:
            return "insertionsortruntime";
        case bubblesort:
            return "bubblesortRuntime";
        case oddevensort:
            return "oddevensortRuntime";
    }
}