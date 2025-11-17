/*
create a method name "trueLength" which will return the length of string excluding spaces.

Example:
const myName = "      jaismine"
console.log(myName.trueLength()) // 8
*/

//injected a prototype method to object that could be accessed by all string , objects , functions
let myHeros = ["thor", "spiderman", "ironman"]; //array
let heroPower = { //object
    thor: "hammer",
    spiderman: "web",
    ironman: "suit",
}
Object.prototype.jaismine = function(){
    console.log("jaismine is present in all ojects")
}
Array.prototype.arrayJaismine = function(){
    console.log("jaismine is present in all arrays")
}
// myHeros.jaismine();  jaismine is present in all ojects
// heroPower.jaismine();  jaismine is present in all ojects

// myHeros.arrayJaismine();  jaismine is present in all arrays
// heroPower.arrayJaismine(); // TypeError: heroPower.arrayJaismine is not a function

//prototypal inheritance 
const user = {
    name : "jaismine",
    email : "123@gmail.com"
}
const teacher = {
    makeVideos : true
}
const teachingSupport = {
    isAvailable : false
}
teacher.__proto__ = user; //teacher inherited user object properties

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher); //teachingSupport inherited teacher object properties

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}` );
}
let myName = "      jaismine    "
myName.trueLength() // true length is : 8

"javascript".trueLength()
"   python   ".trueLength()