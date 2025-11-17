//call method = call execution context kisi or fn ko pass krdeta h 

function SetUsername (username){
    //complex DB calls
    this.username = username;
    console.log("called") //function call hora h lekin variables hatt jaare h 
}
function userDetails (username , email , password){
    /* SetUsername(username); wrong = inernally javascript m sirf refernce gya h call nhi 
    javascript m such methods miltey h jisse aap explicitly jaake unn methods ko call kr skte h */

    SetUsername.call(this , username);
    this.email = email;
    this.password = password;
    
}
const user1 = new userDetails("jaismine" , "abc@gmail.com" , "123");
console.log(user1); //username does not get set