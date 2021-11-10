class SLList{
    constructor(){
        this.head = null
    }

    push(){}

    pop(){}

}


class SLNode{
    constructor(val,pri){
        this.val = val
        this.next = null
        this.pri = pri
    }
}
class test{

    constructor(){
        this.name = 'bob'
    }
    rename(){
        console.log(this.name)
    }
}

let bob = new test
bob.rename()