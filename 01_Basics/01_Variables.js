const accountId = 137493
let accountEmail = "dipesh@google.com"
var accountPassword = "12345"
accountCity = "Navasari"
let accountState;

// accountId = 2 // not allowed (Constants cannot be changed)

accountEmail = "dp@dp.com"
accountPassword = "21212121"
accountCity = "Surat"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])