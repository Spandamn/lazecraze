'use strict';

const readline = require('readline-sync');

const getLine = function () {
    return readline.question('> ');
};

console.log("Enter the dictionary length");
const length = parseInt(getLine());
let dict = [];
console.log("Enter the words");
for (let i = 0; i < length; i++) dict.push(getLine());
console.log("Enter the line");
let sent = getLine();
let words = sent.split(' ');
dict.sort((a, b) => {return b.length - a.length});
words.sort((a, b) => {return b.length - a.length});
let transforms = {' ': ' '};
let applyTransform = function (word, transformObj = transforms) {
    let str = "";
    for (let i = 0; i < word.length; i++) {
        str += transformObj[word.charAt(i)] ? transformObj[word.charAt(i)] : '*';
    }
    return str;
};
let translatedWords = {};
for (let i = 0; i < words.length; i++) {
    if (translatedWords[words[i]]) continue;
    for (let j = 0; j < dict.length; j++) {
        if (words[i].length === dict[j].length) {
            let tTransforms = Object.assign({}, transforms);
            for (let k = 0; k < dict[j].length; k++) {
                if (transforms[words[i].charAt(k)]) continue;
                tTransforms[words[i].charAt(k)] = dict[j].charAt(k);
            }
            let flag = false;
            for (let k = 0; k < words.length; k++) {
                let trial = applyTransform(words[k], tTransforms);
                if (dict.includes(trial) && !translatedWords[words[k]]) {
                    flag = true;
                    translatedWords[words[k]] = trial;
                    break;
                }
            }
            if (flag) Object.assign(transforms, tTransforms);
        }
    }
}
console.log(applyTransform(sent));