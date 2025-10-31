const score = 42.195;
// console.log(score);
// console.log(score.toPrecision(1));

const num= new Number(100);
// console.log(num);

// console.log(num.toString());
// console.log(num.toFixed(2));

// console.log(typeof num);
// console.log(typeof score);

const hundred = 10000000000000;
// console.log(hundred.toLocaleString());//usd 
// console.log(hundred.toLocaleString('en-IN'));//inr

//+++++++++++++++++Maths++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//only -ve values changes to +ve
// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));//removes decimal part
// console.log(Math.ceil(4.2));

console.log(Math.random());//0-0.999999
console.log((Math.random()*10)+1);

const min=10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min+1)))+min);