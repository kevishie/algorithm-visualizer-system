import { selectionSort } from "./Algorithms/selectionSort";

import { bubbleSort } from "./Algorithms/bubbleSort";

import { insertionSort } from "./Algorithms/insertionsort";

export function runAlgorithm(selection, values) {
  switch (selection) {
    case "selectionSort":
      return selectionSort(values);
    case "bubbleSort":
      return bubbleSort(values);
    case "insertionSort":
      return insertionSort(values);
  }
  return;
}
