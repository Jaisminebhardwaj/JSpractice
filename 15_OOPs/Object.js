//prototypes gives extra (internal)properties and methods, also 'THIS' current context is here in prototypes
//'This' --> jisne bhi bulaya h 
function multiby5(num) {
    return num * 5;
}
multiby5.power = 2
// console.log(multiby5(4)); // 20
// console.log(multiby5.power); // 2
// console.log(multiby5.prototype)

function CreateUser (username , score){
    this.username = username;
    this.score = score;
}
CreateUser.prototype.increment = function(){
    this.score++; //jis object ne b bulaya h uska score increment kro 
}
CreateUser.prototype.printme = function(){
    console.log(`${this.username} has logged in`);
}
const user1 =  CreateUser("sachin" , 5); //agar new keywprd nhi lgayenge toh ye error ayega (Cannot read properties of undefined )
const user2 = new CreateUser("rahul" , 7);

// user1.printme()
user2.printme()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/