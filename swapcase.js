// function swapCase(){
//     let result = [];

//     for (let i = 0; i < inputstring.length; i++){
//         if (str[i] === str[i].toUpperCase()){
//             result.push(str[i].toLowerCase);
//         }
//         else if (str[i] === str[i].toLowerCase()) {
//             result.push(str[i].toUpperCase());
//         }
//         else {
//             result.push(str[i]);
//         }
//     }
//     return result.join("");
// }
// //output the qUICK Brown Fox
// console.log(swapCase("The Quick Brown Fox"))

function swapCase(inputstring) {
    let result = [];

    for (let i = 0; i < inputstring.length; i++){
        if (inputstring[i] === inputstring[i].toUpperCase()){
            result.push(inputstring[i].toLowerCase());
        }
        else if (inputstring[i] === inputstring[i].toLowerCase()) {
            result.push(inputstring[i].toUpperCase());
        }
        else {
            result.push(inputstring[i]);
        }
    }
    return result.join("");
}

//output the qUICK Brown Fox
console.log(swapCase("THE QUICK BROWN FOX"));
