'use strict';

const readline = require('readline-sync');
const getLine = function () {
    return readline.question('> ');
};
const invalidInput = function () {
    console.log("Invalid Input");
    process.exit(0);
}

let arr = [];
console.log("Please enter the number of students");
const count = getLine().trim();
if (isNaN(count)) invalidInput();
let average = 0.0;
console.log("Please enter the amounts of each student");
for (let i = 0; i < count; i++) {
    let num = getLine();
    if (isNaN(num)) invalidInput();
    arr.push(parseFloat(num));
    average += arr[i];
}
average = parseInt((average / count) * 100) / 100.0;
let pay = 0.0, bor = 0.0;
for (const c of arr) {
    if (c > average) {
        pay += c - average;
    } else {
        bor += average - c;
    }
}
const min = pay > bor ? bor : pay;
console.log(`\$${min}`);