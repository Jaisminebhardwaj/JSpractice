//immediately invoked function expression. global scope ke pollution (pollution mtlb global variable create hona) se bachne k liye use hota h.

//why? file likhte h jisme sirf database connected ho . or jaise hi file load ho to db connected ho jaye.

(function chai (){
    //named iife
    console.log(`db connected`)
})();//context rokne k lie

//(function defination)(execution call)

((name)=>{
    console.log(`db connected two ${name}`)//arrow fn
})("jaismine")