str = 'sdfsdas'
obj ={}
result =""
for(each of str){
    if(obj[each]){
        obj[each]++
    }else{
        obj[each]=1
    }
}

for (each of Object.keys(obj)){
    if(obj[each] == 1){
        result += each
    }
}



console.log(result)