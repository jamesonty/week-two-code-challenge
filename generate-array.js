// function arrayBetween(start, end){
//     // Initialize an empty array to store the numbers
//     let arr = [];

//     // Loop from the start to the end of numbers 
//     for (let i = start; i <= end; i++){
//         //add each no. to the array
//         numbers.push(i);
//     }
//     // Return the generated array
//     return numbers;
// }

// console.log(arrayBetween(2, 9));

// Code corrected by chat gpt

function arrayBetween(start, end){
    // Initialize an empty array to store the numbers
    let arr = [];

    // Loop from the start to the end of numbers 
    for (let i = start; i <= end; i++){
        //add each no. to the array
        arr.push(i);
    }
    // Return the generated array
    return arr;
}

console.log(arrayBetween(4, 9));// [ 4, 5, 6, 7, 8, 9 ]
console.log(arrayBetween(-4, 8));// [-4, -3, -2, -1, 0, 1, 2,  3,  4,  5, 6, 7, 8]

  
