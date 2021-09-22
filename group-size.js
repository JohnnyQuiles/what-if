const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter class size: '));

if (groupSize % 3 === 0) {
    console.log(groupSize / 3, 'group of threes');
}
else if (groupSize % 3 === 1){
        console.log((groupSize - 4) / 3, 'group of threes', 2, 'groups of twos');
}
else if (groupSize % 3 === 2){
    console.log((groupSize - 2) / 3, 'group of threes', 1, 'groups of twos');
}
else if (groupSize % 3 === 4){
    console.log((groupSize - 4) / 3, 'group of threes', 2, 'groups of twos');
}
else {
    console.log('error');
}

