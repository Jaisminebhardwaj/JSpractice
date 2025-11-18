//static keyword is used to define a static property or method for a class.
//they does not get inherited by the instances of the class.
class user {
    constructor (username){
        this.username = username ;
    }
    logMe(){
        console.log(`username is : ${this.username}`)
    }
    static uniqueId(){
        return `123`
    }
}
class teacher extends user{
    constructor (username , subject){
        super(username); //calling parent class constructor
        this.subject = subject;
    }
}

const jiya = new user ("jiya");
jiya.logMe()
// console.log(jiya.uniqueId()) 

const teacher1 = new teacher ("jaismine" , "maths");
// console.log(teacher1.uniqueId()) // static method can be accessed using class name directly
// console.log(user.uniqueId()) // 123