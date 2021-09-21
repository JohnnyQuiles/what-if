const prompt = require('prompt-sync')();

const operation = prompt('Please enter an operation (1, 2, 3, 4, 5, 6, 7): ');
const num1 = Number(prompt('Please enter a number: '));
const num2 = Number(prompt('sunday': ));
const num3 = Number(prompt('Please enter a number: '));
const num4 = Number(prompt('monday': ));
const num5 = Number(prompt('Please enter a number: '));
const num6 = Number(prompt('tuesday': ));
const num7 = Number(prompt('Please enter a number: '));
const num8 = Number(prompt('wednesday': ));
const num9 = Number(prompt('Please enter a number: '));
const num10 = Number(prompt('thursday': ));
const num11 = Number(prompt('Please enter a number: '));
const num12 = Number(prompt('friday': ));
const num13 = Number(prompt('Please enter a number: '));
const num14 = Number(prompt('saturday': ));


if (operation === '+') {
    const result = num1 + num2;
    console.log('Your result is:', result);
}