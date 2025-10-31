const mynums = [1,2,3]
// const newNums = mynums.reduce(function ( acc , currVal) {
//     console.log(`acc: ${acc}  currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

const newNums = mynums.reduce( ( acc , currVal) => acc + currVal , 0);
// console.log(newNums);

const shoppingCart = [
    {
        courseName : "JS course",
        price : 2999
    },
    {
        courseName : "python course",
        price : 999
    },
    {
        courseName : "AI course",
        price : 12999
    },
    {
        courseName : "C++ course",
        price : 17999
    },
];
const totalAmount = shoppingCart.reduce( ( acc , item) => acc + item.price , 0);
// console.log(totalAmount);