export function bogoSort(arr){
    let c = 0;
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
    let arrays = []
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
            c++;
            arrays.push(arr.slice(0));
            if(c>300){
                return arrays;
            } 
        }
        
    }
    
    return sort(arr);
}
