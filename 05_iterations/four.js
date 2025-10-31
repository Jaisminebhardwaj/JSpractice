//for in loop used for objects (keys)
const myobj = {
    game1 : "candy crush",
    game2 : "subway surf",
    game3 : "clash of clans"
}
for (const key in myobj) {    
    // console.log(`${key}:- ${myobj[key]}`);
}

//arrays
const arr = ["apple", "mango", "grapes"];
for (const key in arr) {
    console.log(arr[key]);
}