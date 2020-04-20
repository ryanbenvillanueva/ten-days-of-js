'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    const set1 = new Set(['a', 'e', 'i', 'o', 'u']);
    const set2 = new Set(['b', 'c', 'd', 'f', 'g']);
    const set3 = new Set(['h', 'j', 'k', 'l', 'm']);
    const set4 = new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']);

    switch (true) {
        case set1.has(s.charAt(0)):
            letter = 'A';
            break;
        case set2.has(s.charAt(0)):
            letter = 'B';
            break;
        case set3.has(s.charAt(0)):
            letter = 'C';
            break;
        case set4.has(s.charAt(0)):
            letter = 'D';
            break;
    }

    return letter;
} 

