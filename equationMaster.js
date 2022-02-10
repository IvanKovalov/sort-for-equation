'use stict'

fs = require('fs');
const reader = require("readline-sync");

const values = fs.readFileSync("text.txt", "utf8")

function takesFileOdds (odds) {
    let result = [];
    const a = Number(odds[0]);
    const b = Number(odds[2]);
    const c = Number(odds[4]);
    result.push(a);
    result.push(b);
    result.push(c);
    return resul;
} 

function consolesolution () {  
    let a, b, c;
    let res = [];
    let str;
    do {
        str = reader.question("pin a: \n");
        a  = Number(str);
        if(isNaN(a)) console.log(`Error. Expected a valid real number, got ${str} instead`);
    } while (isNaN(a));
    do {
        str = reader.question("pin b: \n");
        b  = Number(str);
        if(isNaN(b)) console.log(`Error. Expected a valid real number, got ${str} instead`);
    } while (isNaN(b));
    do {
        str = reader.question("pin c: \n");
        c  = Number(str);
        if(isNaN(c)) console.log(`Error. Expected a valid real number, got ${str} instead`);
    } while (isNaN(c));
    res.push(a);
    res.push(b);
    res.push(c);
    return res;
}

const solution = (coef) => {
    let x1, x2;
    const a = coef[0];
    const b = coef[1];
    const c = coef[2];
    console.log('Equation is:' + a + 'x^2 + ' + b + 'x + ' + c + ' = 0\n');
    const D = (b*b  - 4*a*c);
    if (D > 0){
        x1 = (-1*b + Math.sqrt(D))/(2*a);
        x2 = (-1*b - Math.sqrt(D))/(2*a);
        console.log('There are 2 roots\nx1 = ' + x1 + '\nx2 = '+ x2);
    }
    else if (D === 0){
        x1 = (-1*b)/(2*a);
        x2 = x1; 
        console.log('There are 1 root\n x1 = ' + x1);
    }
    else{
        console.log('There are 0 roots\n');
    }
}

const readCoef = takesFileOdds(values);
solution(readCoef);
const consoleCoef = consolesolution();
solution(consoleCoef);