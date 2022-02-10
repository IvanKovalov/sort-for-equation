'use stict'

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
