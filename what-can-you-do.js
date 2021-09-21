const prompt = require('prompt-sync')();

const number = Number(prompt("Enter a number: "));

if (num < 16) {
    console.log("You can't drive:",);
} else if (num > 16) {
    console.log("You can drive but not vote:",);
}
else if (num < 24) {
    console.log("You can vote but not rent a car:",);
}
else if (num > 25) {
    console.log("You can do pretty much anything:",);
}