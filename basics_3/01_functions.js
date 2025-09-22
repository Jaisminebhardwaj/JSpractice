//block of reusable code that performs a specific task
function greet(name) {//parameter
  console.log(`Hello, ${name}!`);
}
// greet//reference
// greet("Jaismine Bhardwaj") //execute (argument)

// function UserLoginMessage(username){
//     if (!username) {
//         console.log("No username provided");
//         return 
//     }
//     return `Welcome back, ${username}!`;
// }
// console.log(UserLoginMessage("Jaismine Bhardwaj"));
// console.log(UserLoginMessage());

//no string passed output: Welcome back, undefined!
//empty string passed output: Welcome back, !

// function UserLoginMessage(username="Guest"){//default parameter
//     if (!username) {
//         console.log("No username provided");
//         return 
//     }
//     return `Welcome back, ${username}!`;
// }

//e - commerence website ( to add item to cart)
function addToCart(...num1){//rest parameter
    return num1
} 
// console.log(addToCart(1,2,3,4,5,6,7,8,9,10));

const user = {
    username: "Jaismine Bhardwaj",
    course : "JavaScript",
}
function handleObject(anyobject){
    console.log(`User ${anyobject.username} is enrolled in ${anyobject.course}`);
}
// handleObject(user);
handleObject({username: "Jiya", course: "Python"});//passing object directly

const mynewarray = [ 100 , 200 , 300 , 400 , 500 ];
function secondvalue(anyarray){
    console.log(anyarray[1]);
}
secondvalue(mynewarray);