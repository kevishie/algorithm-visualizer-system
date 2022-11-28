import { selectionSort } from "./Algorithms/selectionSort";

import { bubbleSort } from "./Algorithms/bubbleSort";

import { insertionSort } from "./Algorithms/insertionsort";

import { oddevensort } from "./Algorithms/oddevensort";

export function runAlgorithm(selection, values) {
  switch (selection) {
    case "selectionSort":
      return selectionSort(values);
    case "bubbleSort":
      return bubbleSort(values);
    case "insertionSort":
      return insertionSort(values);
    case "oddevensort":
      return oddevensort(values);
  }
  return;
}
