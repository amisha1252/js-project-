const accountId =144341
let accountEmail = "admin@gmail.com" ; //
var accountPassword = "!2345"; //scope problem
accountCity ="jaipur"; // not a good practice

// accountId =2;
console.log(accountId);
 accountEmail="adf@gmail.com"
var accountPassword = 2321;//dont use
accountCity ="kaithal";
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity]);

let accstate;
console.log(accstate); //undefined