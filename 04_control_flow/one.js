// >,<,<=,>=,==,===(check the datatype),!=,!==

// const score = 200;
// if(score >=100 ){
//     const power = "fly";
//     console.log(`You are eligible for power: ${power}`);
// }
// console.log(`You are eligible for power: ${power}`); // you can access power variable here because var is function scoped

// const balance = 1000;
// if (balance > 500) console.log("balance is greater than 500");//implicit block

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;
if(isLoggedIn && debitCard){
    console.log("Allow user to make purchase"); // both conditions should be true
}
if(loggedInFromGoogle || loggedInFromFacebook){
    console.log("user logged in ");// any one condition should be true
}