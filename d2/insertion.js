function binsearch(nums,target,beg=0,end=Infinity){
    //escape
    //found the number or when i have 1 number
    //find middle number
    if(end == Infinity){
        end = nums.length-1
    }
    let num = nums[Math.floor((beg + end)/2)]
    
    if(target == num){
        return true
    }
    if(beg > end || end <=0){
        return false
    }

    if(target > num){
        console.log(beg,end)
        return(binsearch(nums,target,Math.floor((beg + end)/2)+1,end))
    }
    return(binsearch(nums,target,beg,Math.floor((beg + end)/2)-1))

}

arr = [1,2,4,5,6,7,8,9,10]
console.log(binsearch(arr,3))