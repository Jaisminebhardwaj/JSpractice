//This keyword is used to define arrow functions(current context ko refer krta h )
const user = {
    username : "Jaismine",
    website : "Youtube",

    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to ${this.website}`); //normal function
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username ="sam";
// user.welcomeMessage();
// console.log(this); global object ko refer krta h

//console.log(this) browser m krte h toh window object ayega(browser k andr global obj h window) and terminal m krte h toh empty object ayega(global obj node m empty object h)

// function chai (){
//     const username = "jaismine"
//     console.log(this);
//     // console.log(this.username);output - undefined(only works in objects)
// }
// chai();

// const chai = function (){
//     const username = "jaismine"
//     console.log(this.username);;

// }
// chai();

//arrow function 

// const chai = () =>{
//     const username = "jaismine"
//     console.log(this);
//     // console.log(this.username); //output - undefined(only works in objects)
// }
// chai();

// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(5,6));

const addTwo = (num1,num2) =>(num1 + num2); //implicit return
console.log(addTwo(5,6));
