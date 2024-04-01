// function sieveOutPrimes(numbers) {
//     //empty array to store prime no.s
//     let primes = [];

//     // Loop through all numbers from 2 to the squareroot of the number
//     for (let i=2; i <= Math.sqrt(number); i++){
//         if (num % i === 0) return false;
//     }
//     // If the loop completes without finding any dividors, the number is a prime numer
// }

// //Function to filter prime numbers from an array
// function sieveOutPrimes(arr) {
//     //Use only the filter method to return only prime numbers from the input array
//     return arr.filter(num => isPrime(num));
// }

// console.log(sieveOutPrimes([1,2,3,4,5,6,7,8,9]))

//CHATGPT correction
                        //use this code;


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Loop through all numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    // If the loop completes without finding any divisors, the number is a prime number
    return true;
}

function sieveOutPrimes(arr) {
    // Use the filter method to return only prime numbers from the input array
    return arr.filter(num => isPrime(num));
}

console.log(sieveOutPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  //an alternative offered by chat gpt


// function sieveOutPrimes(arr) {
//     const maxNumber = Math.max(...arr); // Find the maximum number in the array
//     const primes = new Array(maxNumber + 1).fill(true); // Initialize an array to mark prime numbers
//     primes[0] = primes[1] = false; // 0 and 1 are not prime

//     // Sieve of Eratosthenes algorithm to mark non-prime numbers
//     for (let i = 2; i <= Math.sqrt(maxNumber); i++) {
//         if (primes[i]) {
//             for (let j = i * i; j <= maxNumber; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }

//     // Filter out prime numbers from the input array
//     return arr.filter(num => primes[num]);
// }

// console.log(sieveOutPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));

