class user {
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`username is : ${this.username}`)
    }
}
class teacher extends user {
    constructor (username , subject){
        super(username); //calling parent class constructor
        this.subject = subject;
    }
    addCourse (){``
        console.log(`course added by ${this.username} in subject ${this.subject}`)
    }
}
const teacher1 = new teacher ("jaismine" , "maths");
// teacher1.addCourse();

const user1 = new user ("john_doe");
user1.logMe();

// console.log(user1===user) // false
// console.log(user1 instanceof user) // true
// console.log(teacher1 instanceof teacher) // true
// console.log(teacher1 instanceof user) // true