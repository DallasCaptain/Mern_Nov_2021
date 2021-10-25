function selectionsort(arr){    
    for(var i = 0; i<arr.length; i++){
        var min = arr[i]
        var tracker = i
        for(var j =i; j<arr.length; j++){
            if(arr[j]< min){
                min = arr[j]
                tracker = j
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[tracker] = temp;
        console.log(arr)
    }
    return arr
}

console.log(selectionsort([10, 12, 24, 2, 3, 9, 21]))