//object literal --> const user = {}
// const user = {
//     username : "Jaismine",
//     password : "abc",
//     getUserDetails : function (){
//         // console.log("Got user details from database")
//         // console.log(`username is : ${this.username}`)
//         // console.log(this) current context
//     }
    
// }
// console.log(user.getUserDetails())
// console.log(this) global context ( if we run in browser then this has a window object that contains multiple methods and functions)


//constructor function --> new (gives a new instance)

function user(username , IsLoggedIn , loginCount){
    this.username = username
    this.IsLoggedIn = IsLoggedIn
    this.loginCount = loginCount

    this.greeting = function (){
        console.log(`welcome : ${this.username}`)
    }

    // return this 
}
// const userOne = user("jaismine" , true , 12 )
// const userTwo = user("Bhardwaj" , false , 2 )

// console.log(userOne)  by not using new keyword the userTwo overwrites the UserOne details without printing the values of userTwo

const userOne = new user("jaismine" , true , 12 )
const userTwo = new user("Bhardwaj" , false , 2 )
console.log(userOne)
console.log(userOne instanceof user) // instanceof -->  check if an object is an instance of a particular constructor or class

//About new keyword --> 
// 1. creates a empty Object
// 2. construction function call due to new keyword (pack the arguments and gives)
// 3. 'this' keyword inject these arguments to it 
// 4. gives us the output 