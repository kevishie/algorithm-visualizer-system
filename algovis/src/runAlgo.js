import { selectionSort } from "./Algorithms/selectionSort";
import { bubblesort } from "./Algorithms/bubblesort";
import { insertionSort } from "./Algorithms/insertionsort";
import { oddevensort } from "./Algorithms/oddevensort";
import { quickSort } from "./Algorithms/quicksort";
import { bogoSort } from "./Algorithms/bogosort";
import { mergeSort } from "./Algorithms/mergesort";
import { shellsort } from "./Algorithms/shellsort";
import { heapsort } from "./Algorithms/heapsort";

export function runAlgorithm(selection, values) {
  switch (selection) {
    case "selectionsort":
      return selectionSort(values);
    case "bubblesort":
      return bubblesort(values);
    case "insertionsort":
      return insertionSort(values);
    case "oddevensort":
      return oddevensort(values);
    case "quicksort":
      return quickSort(values);
    case "bogosort":
      return bogoSort(values);
    case "mergesort":
      return mergeSort(values);
    case "shellsort":
      return shellsort(values);
    case "heapsort":
      return heapsort(values);
  }
  return;
}
