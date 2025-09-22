//memory m data kis tarike se store hote h or access krte h
//  Primitive  

//  7 types : String, Number, Boolearn, null, undefined, Symbol(component ko symbol m wrap kr dete h), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log( symbol1=== symbol2);//false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Jaismine",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof score); // 100 = number
// console.log(typeof isLoggedIn); // false = boolean
// console.log(typeof outsideTemp);// null = object (bug)
// console.log(typeof symbol1);// symbol = symbol
// console.log(typeof userEmail); // undefined = undefined
// console.log(typeof heros);// array = object
// console.log(typeof myObj);// object = object
// console.log(typeof myFunction);// function = function


//++++++++++++++++++++++++++++++++++++++++++++++++++
//Heap(primititve,call by value) and Stack(reference,call by reference)
let name = "jaismine"
let name2 = name
// console.log(name);
// console.log(name2);
name2 = "bhardwaj"
// console.log(name);
// console.log(name2);

const person ={
    name: "jaismine",
    age: 19,
}
const person2 = person
console.log(person.name);
console.log(person2.name);
person2.name = "bhardwaj"
console.log(person.name);
console.log(person2.name);