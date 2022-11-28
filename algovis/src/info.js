import { insertionSort } from "./Algorithms/insertionsort";
import { selectionSort } from "./Algorithms/selectionsort";
import { bubblesort } from "./Algorithms/bubblesort";
import { oddevensort } from "./Algorithms/oddevensort";
import { shellsort } from "./Algorithms/shellsort";
import { mergeSort } from "./Algorithms/mergesort";
import { heapsort } from "./Algorithms/heapsort";
import { quickSort } from "./Algorithms/quicksort";
import { bogoSort } from "./Algorithms/bogosort";
export function runtime(selection){
    switch(selection){
        case selectionSort:
            
            return "Runtime: O(N²)";
        case insertionSort:
            return "Runtime: O(N²)";
        case bubblesort:
            return "Runtime: O(N²)";
        case oddevensort:
            return "Runtime: O(N²)";
        case shellsort:
            return "Runtime: O(N²)";
        case mergeSort:
            return "Runtime: O(N log(N))";
        case heapsort:
            return "Runtime: O(N log(N))";
        case bogoSort:
            return "Runtime: Worst: O(∞) Average: O(N*N!) Best: O(n)"
        case quickSort:
            return "Runtime: O(NLogN)"
    }
}

export function information(selection){
    switch(selection){
        case selectionSort:
            return "The selection sort algorithm sorts an array by repeatedly finding the minimum element \
                    (considering ascending order) from the unsorted part and putting it at the beginning. ";
        case insertionSort:
            return "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. \
                    The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and \
                    placed at the correct position in the sorted part.";
        case bubblesort:
            return "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the \
                    adjacent elements if they are in the wrong order. This algorithm is not suitable for \
                    large data sets as its average and worst-case time complexity is quite high.";
        case oddevensort:
            return "This is basically a variation of bubble-sort. This algorithm is divided into two phases- \
                    Odd and Even Phase. The algorithm runs until the array elements are sorted and in each iteration two phases occurs- Odd and Even Phases.";
        case shellsort:
            return "Shell sort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of ShellSort is to allow the exchange of far items. \
                    In Shell sort, we make the array h-sorted for a large value of h. \
                    We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element are sorted.";
        case mergeSort:
            return "The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. \
                    In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.";
        case heapsort:
            return "Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort \
                    where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.";
        case bogoSort:
            return "BogoSort also known as permutation sort, stupid sort, slow sort, shotgun sort or monkey sort is a particularly ineffective algorithm one person can ever imagine.\
                     It is based on generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted."
        case quickSort:
            return "Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. \
                    There are many different versions of quickSort that pick pivot in different ways. "
    }
}