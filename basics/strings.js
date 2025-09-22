const name = "Jaismine Bhardwaj"
const greeting = 'Good Morning'

// console.log(name+" "+greeting);
console.log(`${greeting} my name is ${name} `);//string interpolation

const name1 = new String("Jaismine")
// console.log(name1[0])
// console.log(name1.__proto__);

// console.log(name1.length);
// console.log(name1.toUpperCase());

// console.log(name.charAt(3));
// console.log(name.indexOf('s'));

const newString=name.substring(0,4);
console.log(newString);

const newString2=name.slice(-16,4);
console.log(newString2);

const newString3="   Hello World   "
// console.log(newString3);
// console.log(newString3.trim());

// console.log(newString3.trimStart());
// console.log(newString3.trimEnd());

const url = "https://jaismine.com%20about"
// console.log(url.replace('%20','-'));
// console.log(url.includes('jaismine'));

const array = "Hey ! Jaismine speaking "
console.log(array.split(" "))