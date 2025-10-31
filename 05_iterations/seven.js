const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.map( (n) => n+10 );
// console.log(newNums);

//chainning map
const newNum = nums
                .map( (num) => num*10)
                .map( ( num) => num+5 )
                .filter( ( num) => num>50 );
                
console.log(newNum);