


const fruits = ['aplle', "banana", 'pear', "avocado"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);    
// } 
//this one witll print all fruits in the list


// for (let i = 1; i <= 10; i++) {
//     console.log(i) 
// }
//This one will print i (index) numbers from 1 to 10


// for (let x in fruits){
//     console.log (fruits[x]);
// }
//It will also print all fruits in the list


const car = {type: "mazda", color: "red", plateNumber: 12345 }


// for (let x in car){
//     console.log(car [x])
// }
// This will print mazda, red, 12345 in a column


for (let x in fruits) {
    console.log(fruits[x]);
    if (fruits[x] == "avocado"){
        console.log("I didn't know that avocado is a fruit!");
    }
}
// Debaging, checking that all conditions are met. 