import { selectionSort } from "./Algorithms/selectionSort";
import { bubblesort } from "./Algorithms/bubblesort";
import { insertionSort } from "./Algorithms/insertionsort";
import { oddevensort } from "./Algorithms/oddevensort";
import { quickSort } from "./Algorithms/quicksort";
import { bogoSort } from "./Algorithms/bogosort";
import { mergeSort } from "./Algorithms/mergesort";

export function runAlgorithm(selection, values) {
  switch (selection) {
    case "selectionSort":
      return selectionSort(values);
    case "bubblesort":
      return bubblesort(values);
    case "insertionSort":
      return insertionSort(values);
    case "oddevensort":
      return oddevensort(values);
    case "quickSort":
      return quickSort(values);
    case "bogoSort":
      return bogoSort(values);
    case "mergeSort":
      return mergeSort(values, 0, values.length);
  }
  return;
}
