export function selectionSort(array){
        let arrays = [];
        arrays.push(array.slice(0));
        for (let i=0; i<array.length; i++) {
          let min = i;
          for (let j=i+1; j<array.length; j++) {
            if (array[j] < array[min]) {
              min = j;
            }
          }
          let tmp = array[min];
          array[min] = array[i];
          array[i] = tmp;
          arrays.push(array.slice(0));
        }
        return arrays; // Returns array iteration history.
    }

    export const name = "Selection Sort";
 
