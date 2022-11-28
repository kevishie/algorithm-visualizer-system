export function heapsort(array){
    let arrays = [];
    arrays.push(array.slice());

    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }
    for (let i = array.length - 1; i >= 0; i--) {
        let tmp = array[0];
        array[0] = array[i];
        array[i] = tmp;

        arrays.push(array.slice());

        heapify(array, i, 0, arrays);
    }
    return arrays;

    function heapify(a, n, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < n && a[l] > a[largest]) {
            largest = l;
        }

        if (r < n && a[r] > a[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let tmp = a[i];
            a[i] = a[largest];
            a[largest] = tmp;

            arrays.push(a.slice());

            heapify(a, n, largest);
        }
    }

} export const name = "Heap Sort";