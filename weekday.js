const prompt = require('prompt-sync')();

const num = Number(prompt("Enter a number for a day of the week: "));

if (num === 1) {
    console.log("Sunday",);
} else if (num === 2) {
    console.log("Monday:",);
}
else if (num === 3) {
    console.log("Tueday:",);
}
else if (num === 4) {
    console.log("Wednesday:",);
} 
else if (num === 5) {
    console.log("Thursday:",);
}
else if (num === 6) {
    console.log("Friday:",);
}        
else if (num === 7) {
    console.log("Saturday:",);
}
else {
    console.log("That is a error"); 
}