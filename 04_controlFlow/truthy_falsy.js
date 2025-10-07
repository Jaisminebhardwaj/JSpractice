const userEmail = "";
if (userEmail) {
    console.log("Got user email");
}else{
    console.log("User email not found");

}
//falsy values : 0 , false , -0 , bigInt , null , undefined , NaN , "" (empty string)
//truthy values : "0" , "false" , " " (space) , [] , {} , function(){}

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//nullish coalescing operator (??) - returns the right side operand when the left side operand is null or undefined
let val ;
// val = 10 ?? 5;
// val = null ?? 5;
// val = undefined ?? 5;
// val = null ?? 10 ?? 20 ;


// console.log(val);

//terniary operator
// condition ? true : false
const age = 17;
console.log(age >= 18 ? "You can vote" : "You cannot vote");