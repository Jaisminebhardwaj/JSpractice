// as a constructor
// const obj1 = new Object();//singleton object 
const obj2 = {}; // object literal(non singleton object)

obj2.name = "Jaismine Bhardwaj";
obj2.age = 22;
obj2.IsLoggedIn = false;
// console.log(obj2);

const details = {
    email : "JBhardwaj@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Jaismine",
            lastname : "Bhardwaj"
        }
    }

}
// console.log(details.fullname?.userfullname.firstname);

const obj = {1: "a", 2: "b"};
const obj3 ={3: "c", 4: "d"};

// const obj4 = {obj, obj3} //{obj: {1: "a", 2: "b"}, obj3: {3: "c", 4: "d"}}
const obj4 = {...obj, ...obj3} //spread operator
// const obj4=Object.assign({}, obj, obj3);//target, source1, source2(sab sources ko copy krke target me daal dega)
// console.log(obj4);

// console.log(Object.keys(details));//gives array as a datatype of all keys
// console.log(Object.values(details));
// console.log(Object.entries(details));
// console.log(details.hasOwnProperty("email"));//true/false

//destructuring
const course = {
    coursename : "JavaScript",
    price : 999,
    courseInstructor : "Jaismine Bhardwaj"
}
const {courseInstructor: inst} = course;//object destructuring
// console.log(inst);

//JSON
// {
//   "city": "London",
//   "temperature": 15,
//   "condition": "Partly Cloudy",
//   "humidity": 70
// }

//API can be recieved in JSON format only either array or object