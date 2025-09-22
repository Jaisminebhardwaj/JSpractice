// singleton ( object construter )
//oject literal (declaration)

const mysym = Symbol("Key1");
const Jsuser = {
    name : "jaismine",// behind the scene it is string
    age : 19,
    "full name" : "jaismine Bhardwaj", // space allowed
    // mysym : "myvalue", // square bracket notation
    [mysym] : "myvalue", // computed property

}
// console.log(Jsuser.age); // as a string access nhi hota
// console.log(Jsuser["age"])
// console.log(Jsuser["full name"]); // cannot be accessed by dot notation

// console.log(Jsuser.mysym); 
// console.log(typeof Jsuser.mysym);  // accessed as a string not as a symbol

// console.log(Jsuser[mysym]); // accessed by square bracket notation
Jsuser.age = 20; // update
// Object.freeze(Jsuser); // freeze the object
Jsuser.age = 25; // cannot update
// console.log(Jsuser);

Jsuser.greeting = function(){ // method
    console.log("Hello Jsuser");
}

Jsuser.greetingtwo = function(){ 
    console.log( `Good morning ${this.name}`); // jab same object ke andar method bna rhe ho to this keyword use kro
}

console.log(Jsuser.greeting()); // method call
console.log(Jsuser.greetingtwo());