//arrays =  special variable/objects that can hold more than one value.
const fav = ["pink","burger","paintings"];
// console.log(fav[0]);

//array methods
// fav.push("new item");
// fav.pop();//removes last item
// fav.unshift("first item");//adds to the front
// fav.shift();//removes first item

// console.log(fav.includes("burger"));//true or false
// console.log(fav.indexOf("paintings"));//2

// const newarr = fav.join();
// console.log(newarr);
// console.log(typeof newarr);
// console.log(fav);

const marvel = ["spiderman","ironman","thor"];
const dc = ["batman","superman","flash"];
// marvel.push(dc);
// console.log(marvel);

// const allheroes = marvel.concat(dc);
// console.log(allheroes);

// const allheroes2 = [...marvel,...dc]; // spread operator(same as concat)
// console.log(allheroes2);

const compicated_array = [1,2,3,[4,5,6],7,[8,[1,34,2]]];
const real_array = compicated_array.flat(Infinity);//flattens the array
// console.log(real_array);

// console.log(Array.isArray("jaismine"));//true or false
// console.log(Array.from("jaismine"));//true or false
// console.log(Array.from({name:"jaismine"}));//true or false(intresting)

let age1  = 14;
let age2 = 18;
let age3 = 20;
console.log(Array.of(age1,age2,age3));//creates an array from the given values