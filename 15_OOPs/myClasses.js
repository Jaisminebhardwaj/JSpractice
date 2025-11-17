// class user {
//     constructor (name , email , password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword (){
//         return `encrypted password is : ${this.password}abc`
//     }
//     changeUsername (){
//         return `${this.name.toUpperCase()}`
//     }
// }
// const user1 = new user ("jiya" , "abc@gmail.com" , "123");
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())

//BEHIND THE SCENES
function user (name , email , password){
        this.name = name;
        this.email = email;
        this.password = password;
}
user.prototype.encryptPassword = function (){
    return `encrypted password is : ${this.password}abc`
}
user.prototype.changeUsername = function (){
    return `${this.name.toUpperCase()}`
}
const user2 = new user ("anamika" , "123@gmail.com" , "456");
console.log(user2.encryptPassword())
console.log(user2.changeUsername())