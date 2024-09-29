// Solution by Kai Waløen

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var data = parseInt(line);
    solve = printedStatues(data);
    console.log(solve);
});

function printedStatues(n) {
    let s = n;
    let p = 1;
    let d = 0;

    while (s > p) {
        p *= 2;
        d += 1;
    } 
        d += 1;
        return d;
}