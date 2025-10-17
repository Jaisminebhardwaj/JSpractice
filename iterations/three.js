//for of 
const arr = [1,2,3,4,5];
for (const num of arr) {//object means kis chiz prr loop chalana hai
    // console.log(num);
}

const greeting = 'Hello World';
for (const char of greeting) {
    // console.log(char);
}

//MAPS(key,value pair , insertion order maintained , duplicate keys appear once , iterable)
const map = new Map();
map.set('name', 'Jaismine');
map.set('age', 20);
map.set('hobby', 'dancing');
// console.log(map);
for (const [key,value] of map) {
    // console.log(`${key}:- ${value}`);
}

//objects are not iterable by for of loop
const myobj = {
    game1 : "candy crush",
    game2 : "subway surf",
    game3 : "clash of clans"
}

// for (const [key,value] of myobj) {  //TypeError: myobj is not iterable
//      console.log(`${key}:- ${value}`);
// }
