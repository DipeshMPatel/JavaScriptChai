//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "dipesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "dipesh"
    if (username === "dipesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);                 //error
}

// console.log(username);                   // error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))      // Does not give error

function addone(num){
    return num + 1
}



addTwo(5)                     // Gives error
const addTwo = function(num){
    return num + 2
}