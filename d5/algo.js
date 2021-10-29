//radixSort using countingSort


function radixSort(arr){
    //using coutingsort, sort numbers from LSD to MSD
    console.log(arr)
    let max = arr[0]
    for(let num of arr){
        max = num > max ? num : max
    }
    let iters = String(max).length
    for(let i = 1; i <= iters; i++){

        arr = countingSort(arr,i)
        console.log(arr)
    }
    return arr
}

//takes an array, puts each element into a sub array, fills a new array with sorted sub array elements
function countingSort(arr, digit=1){
    //loop over the array
                //0  1  2  3 4   5 6  7  8   9
    let subarr =[[],[],[],[],[],[],[],[],[],[]]
    for(let i = 0 ; i<arr.length; i++){
        //place items in sub arrays based on 1s digit
        let num = arr[i]
        subarr[Math.floor((num % Math.pow(10,digit))/Math.pow(10,digit-1))].push(num)
    }
    //take items from sub array and fill sorted array
    //console.log(subarr)
    let sorted = []
    for(let group of subarr){
        for(let number of group){
            sorted.push(number)
        }
    }
    return sorted
}

radixSort([234,267,163,666,357,91,121])