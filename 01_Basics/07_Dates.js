// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()                                   // gives the amount of milliseconds passed since Jan 1 1970 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));                   // converting Milliseconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);                           // Months start from 0
console.log(newDate.getDay());                                 // 0 = Sunday, 1 = Monday, 2 = Tuesday,  ....... 6 = Saturday;

// `${newDate.getDay()} and the time `                         // String Interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    
})