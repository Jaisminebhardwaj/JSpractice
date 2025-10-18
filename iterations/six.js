//for each does not return a new array, it returns undefined
const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"];
const values = coding.forEach( (item) => {
    // console.log(`${item}`);
})
// console.log(values);  undefined

//filter returns a new array based on the condition
const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter( (num) => num<7 );

// const newNums = nums.filter( (num) =>{ 
//    num<7
// }); output: []

// const newNums = nums.filter( (num) =>{ 
//    return num<7
// }); output: [ 1, 2, 3, 4, 5, 6 ]( explicit return due to scope block)

//using for each 
// const newNums = [];
// nums.forEach( (num) => {
//     if(num<7){
//         newNums.push(num);
//     }
// });
// console.log(newNums); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// const newBooks = books.filter ( (bk) => bk.genre === 'Science' );
const newBooks = books.filter ( (bk) => bk.publish >2000 );

// console.log(newBooks);