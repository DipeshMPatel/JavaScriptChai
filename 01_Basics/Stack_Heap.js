// Stack(Primitive), Heap (Non-Primitive)

let myName = "Dipesh"
let myOtherName = myName
myOtherName = "Deep"

console.log(myName);
console.log(myOtherName);


let UserOne = {
    email: "Dipesh@google.com",
    upi: "user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "Deep@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);

