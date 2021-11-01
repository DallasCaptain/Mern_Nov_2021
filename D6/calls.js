//call back example
// function first(cb){

//     return cb([1,2,3])
// }

// function second(arr){
//     newarr = []
//     for(let num of arr){
//         newarr.push(num+1)
//     }
//     return newarr
// }

// arr = first(second())

//map function

const nums = [1,2,3,4,5]

for (let i =0; i< nums.length;i++){
    nums[i]= nums[i]+1
}

console.log(nums)

// const dec =(num)=>{
//     return num-1
// }

let nums2 = nums.map(function dec(num){
    return num-1
})

console.log(nums2)
