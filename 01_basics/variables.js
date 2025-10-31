const accountId = 144553
let accountEmail = "jaismine123@gmail.com" //can be accessed within curly braces
var accountPassword = "12345"   //can be accessed outside the curly braces or functions
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "23Jaismine@gmail.com"
accountPassword = "21212121"
accountCity = "gurgaon"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])