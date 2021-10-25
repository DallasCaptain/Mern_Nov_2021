console.log('Hello Class')
//js
//var name = 'bob'

function detail (){

    //console.log(name)
    var other = 'charlie'
    var i = 100
    for(let i = 0;i<5;i++){
        let newvar = 'test'
    }
    console.log(i)

}

detail()


const person = ['carl']

person[0] = 'b'
console.log(person)


console.log(other) 
test()
//init
var other = 8;
//define
other = 9

function test(){
    console.log('test')
}


//destructuring
const person2 = {
    name:'bob',
    email:'bob@bob.com'
}

let pname = person2.name

// let {name,email} = person2

// console.log(name)
// console.log(email)

const animals = ['horse', 'dog', 'fish', 'cat', 'bird','velociraptor'];
const [favoriteAnimal, secondAnimal, , , ,raptor] = animals;

console.log(raptor)

let personcopy = {...person2}
console.log(personcopy)
console.log(personcopy === person2)


//arrow functions

function somename(){

}

var somefun = function(){

}

// var arrow = () => { 
//     console.log(param) 
// }
// arrow('hit the target')

//ternary operator
function iftrue(){
    number = 10;console.log('number is now 10')
}
var number = 100
10 < number ? iftrue() : console.log('number is still', number)
console.log(number)