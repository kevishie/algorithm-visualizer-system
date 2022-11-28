import { selectionSort } from "./Algorithms/selectionSort";

import { bubblesort } from "./Algorithms/bubblesort";

import { insertionSort } from "./Algorithms/insertionsort";

import { oddevensort } from "./Algorithms/oddevensort";

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
  }
  return;
}
