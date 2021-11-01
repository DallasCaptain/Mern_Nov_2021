function s2w(str){
    let words =[]
    let punc = []
    //push 1 word into words for each word in string
    //identify a word
    //a word ends with " "
    //a word starts with the first non " " after a " "
    //track a word until a space, push it in, then reset the word
    let word =''
    for(let char of str){
        if(char === " "){
            if(word.length){ //0 is falsy, all other numbers are truthy
                words.push(word)
                punc.push('')
                word = ""
            }
        }else if(char === '.' || char === ',' || char === '!' || char ==='?'){
            if(word.length){ //0 is falsy, all other numbers are truthy
                words.push(word)
                word = ""
                punc.push('')
            }
            punc.push(char)
        }
        else{
            word += char
        }
    }
    if(word.length)
    words.push(word)
    return [words,punc]

}

function rwo(str){
    console.log(str.length)
    let newstr = '';
    let data = s2w(str)
    let words = data[0]
    let punc = data[1]

    let w = words.length-1
    console.log(words,punc,w)
    for(let p = 0; p<punc.length;p++){
        let found = false
        if(punc[p] == '.' || punc[p] == ',' || punc[p] == '?'|| punc[p] == '!'){
            newstr+= punc[p]
            found = true
        }else{
            
            newstr+= words[w]
            if(punc[p+1] != '.' && punc[p+1] != ',' && punc[p+1] != '?' && punc[p+1] != '!'){
                found = true
            }
            w--
        }
        if(found && p < punc.length-1){
            newstr += ' '
        }
    }
    // while(w>=0 || p < words.length){
    //     let word = words[w]
    //     let punc = words[p]
    //     console.log(w,word,p,punc)
    //     let found = false
    //     if(word!= '.' && word!=',' && word!='?' && word!='!'){
    //         newstr+=word
    //         found = true
    //     }
    //     if(punc == '.' || punc == ',' || punc == '?'|| punc == '!'){
    //         newstr+= punc
    //         found = true
    //     }
    //     if(found && p < words.length-1)
    //     newstr+=' '
    //     w--
    //     p++
    // }

    // for(let i = words.length-1; i >=0; i--){
    //     newstr+=words[i]
    //     if(i != 0)
    //     newstr += " "
    // }
    console.log(newstr.length)
    return newstr
}

let test = 'hello, bob. How are you?'
console.log(rwo(test))