//browser mein scope check kroge alg ayega and terminal m alag
if(true) {
    const a = 30; // (global)function-scoped variable
    let b = 40; // block-scoped variable
    var c = 50; //it's accessible anywhere within the function it's declared in, regardless of where it's placed
}
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one (){
    const username = "jaismine";
    function two(){
        const website = "learnwithjaismine.com";
        // console.log(username);
        // console.log(website);
    }
    // console.log(website); //error
    two();
}
one();

//++++++++++++++++intresting example+++++++++++++
console.log(addone(5));
function addone(num){
    return num+1;
}

// addtwo(5); error
const addtwo = function(num){ //function expression
    return num+2;
}