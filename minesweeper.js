'use strict';

const readline = require('readline-sync');
const getLine = function () {
    return readline.question('> ');
};

console.log("Enter the dimensions");
let dim = getLine().split(" ");
dim.map(parseInt);
let field = [];
console.log("Enter the field");
for (let i = 0; i < dim[0]; i++) {
    field.push(getLine().split(""));
}

let minesweeper = [];
for (let i = 0; i < field.length; i++) {
    minesweeper.push([]);
    for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === '*') {
            minesweeper[i].push('*')
        } else {
            minesweeper[i].push(0);
            if (field[i - 1] && field[i - 1][j] === '*') minesweeper[i][j]++;
            if (field[i + 1] && field[i + 1][j] === '*') minesweeper[i][j]++;
            if (field[i][j - 1] === '*') minesweeper[i][j]++;
            if (field[i][j + 1] === '*') minesweeper[i][j]++;
            if (field[i - 1] && field[i - 1][j + 1] === '*') minesweeper[i][j]++;
            if (field[i + 1] && field[i + 1][j - 1] === '*') minesweeper[i][j]++;
            if (field[i + 1] && field[i + 1][j + 1] === '*') minesweeper[i][j]++;
            if (field[i - 1] && field[i - 1][j - 1] === '*') minesweeper[i][j]++;
        }
    }
}

for (let i = 0; i < dim[0]; i++) {
    console.log(minesweeper[i].join(""))
}
