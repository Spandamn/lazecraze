'use strict';

const readline = require('readline-sync');
const getLine = function () {
    return readline.question('> ');
};

const getCycleLength = function (num) {
    let count = 1;
    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : (num * 3) + 1;
        count++;
    }
    return count;
};
console.log('Enter the numbers');
let nums = getLine().split(' ');
if (nums.length !== 2 || nums.some(isNaN)) {
    console.log("Invalid input, please try again\n");
    process.exit(0);
}
nums.map(parseInt);
let n1 = nums[0], n2 = nums[1], highest = 0;
for (let i = n1; i <= n2; i++) {
    let current = getCycleLength(i);
    if (current > highest) highest = current;
}
console.log(`${n1} ${n2} ${highest}`);