//promises are used to handle asynchronous operations in JavaScript.
//They represent a value that may be available now, in the future, or never.
//promises ---> creation and consumption
//.then() --> handles both resolved and rejected cases .catch--->handles only the rejected case and is used for cleaner error handling, especially when chaining promises.

//creation
let myPromise = new Promise(function (resolve, reject) {
    //async operation
    //db call , cryptography
    setTimeout(function (){
        console.log("Async operation is complete")
        resolve() //to mark the promise as fulfille(cllback function)
    },1000)
})
//consumption
myPromise.then(function (){
    console.log("Promise consumed")
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async operation 2 is complete")
        resolve()
    },1000)

}).then(function(){
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({userName : "john_doe", age: 25})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise ( function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName : "jane_doe", age: 30})
        }else{
            reject("Error: Something went wrong")
        }   
    },1000)
})
promiseFour
.then(function(user){
    console.log(user)
    return user.userName
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally (function(){
    console.log("Promise four is settled")
})

const promiseFive = new Promise ( function (resolve , reject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({userName : "jaismine", age: 30})
    }else{
        reject("Error: Error occurred in promise five")
    }   
    },1000)
})
// async function consumePromiseFive(){ //async await could not handle errors so wrap them in try catch
//     const respose = await promiseFive
//     console.log(respose)
// }
async function consumePromiseFive(){ 
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

//consuption using async await
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error fetching users:", error)
//     }
// }
// getAllUsers()

//consuption using .then and .catch

//fetch has a priority queue in memory that priortize the fetch function rather than anything else
fetch(' https://api.github.com/users/jaismineBhardwaj')
.then(function(response){
    return response.json()// convert response from string to json
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
