function randInt(){
    return Math.floor(Math.random()*100)
}


class Person {

    constructor(name,lname,age = randInt()){
        this.name = name
        this.age = age
        if(lname){
            this.lname = lname
        }
    }

    birthday(){
        console.log(`happy bday ${this.name}` )
        this.age++
    }

}

let p1 = new Person('carl')


console.log(p1)


class Player extends Person {
    
    constructor(name,lname, number,age,){
        super(name,lname,age)
        this.number = number
    }

    paycheck(){
        console.log('getting sponsors!')
    }

}

let p2 = new Player('nick','nickerson',17,)
let p3 = new Player('bob','boberson',44,1,)
p2.birthday()
p1.paycheck()

console.log('PLAYERS:' ,p2, p3)