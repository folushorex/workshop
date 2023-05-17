
const prompt = require("prompt-sync")({sigint:true});
let str = prompt('Enter a sentence :');// declare a variable that receives the value of the users prompt

let res = str.match(/[aeiou]/ig).join("");
console.log('the vowels in this sentence is:' + res);//declare another variable that receives the value that checks if the word is a sentence.

let strV = str.length;//declare another variable that receives the value of the length of string.
console.log('The number of characters in this sentence is: ' + strV);