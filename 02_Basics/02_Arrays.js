const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)                                // will push whole array of dc_heros as a single element in marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)             // marvel_heros.concat(dc_heros) RETURNS an concatenated array (Does'nt add elemnts of dc_heros in marvel_heros array ) , so put the concatenated array into a variable to save it.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]          // Better than concat as you can combine more than 2 arrays in one step like [...marvel_heros, ...dc_heros, ...indian_heros, ...and_so_on ]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)       // writing (infinity) not good practice, preferable to specify the depth till which it will go 
console.log(real_another_array);



console.log(Array.isArray("Dipesh"))
console.log(Array.from("Dipesh"))
console.log(Array.from({name: "dipesh"}))                    // interesting; returns an empty array if it is unable to successfully convert to an array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));