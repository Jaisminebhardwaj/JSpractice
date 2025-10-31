const coding = ["JS", "Python", "C++", "Java"];
// coding.forEach(function (item) {
//     console.log(item);
    
// });

// coding.forEach((item) => {
//     console.log(item);
    
// });

function printme(item){
    console.log(item);
}
// coding.forEach(printme);callback function

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
]
mycoding.forEach((item) => {
    console.log(`The file extension of ${item.languageName} is ${item.languageFileName}`);
});