function bubbleSort(array) {
    let arrays = [];
    arrays.push(array.slice(0));
    for (let i=0; i<array.length; i++) {
      
      for (let j=0; j<(array.length - i - 1); j++) {
        if (array[j] > array[j+1]) {
          var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
      arrays.push(array.slice(0));
    }
    return arrays; // Returns array iteration history.
  }
