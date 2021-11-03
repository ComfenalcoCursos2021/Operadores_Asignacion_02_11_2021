

let myStyleMenssage = `
    color:#fff; 
    font-family: Arial;
    background: #2D882D;
    padding: 5px;
    border-radius: 8px;
    `;
let myStyle = `
    color:#fff; 
    font-family: Arial;
    background: #407F7F;
    padding: 5px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    `;
let myStyleData = `
    color:#fff; 
    font-weight: bold; font-family: sans-serif;
    background: #669999;
    padding: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
let myStyleFormula = `
    color:#fff; 
    font-family: Arial;
    
    background: #7887AB;
    padding: 5px;
`;

let a = 5, b = 10;// Operador Adicion 
console.group(`%cOperador Adicion '+'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x + y, %c${a} = ${a} + ${b} `,myStyle,myStyleFormula,myStyleData,(a + b));
    console.log(`%cAbreviado: %cx += y, %c${a} = ${b}`,myStyle,myStyleFormula,myStyleData,(a += b));
console.groupEnd();

let e = 20, i = 8;//Operador Sustracion 
console.group(`%cOperador Sustracion '-'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x - y,%c${e} = ${e} - ${i} `,myStyle,myStyleFormula,myStyleData,(e - i));
    console.log(`%cAbreviado: %cx -= y, %c${e} = ${i}`,myStyle,myStyleFormula,myStyleData,(e -= i));
console.groupEnd();

let t = 5, u = 2;//Operador Multiplicacion 
console.group(`%cOperador Multiplicacion '*'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x * y,%c${t} = ${t} * ${u} `,myStyle,myStyleFormula,myStyleData,(t * u));
    console.log(`%cAbreviado: %cx *= y, %c${t} = ${u}`,myStyle,myStyleFormula,myStyleData,(t *= u));
console.groupEnd();

let l = 5, v = 2;//Operador Divicion 
console.group(`%cOperador Division '/'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x / y,%c${l} = ${l} / ${v} `,myStyle,myStyleFormula,myStyleData,(l / v));
    console.log(`%cAbreviado: %cx /= y, %c${l} = ${v}`,myStyle,myStyleFormula,myStyleData,(l /= v));
console.groupEnd();

let o = 5, q = 2;//Operador Resto 
console.group(`%cOperador Resto '%'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x % y,%c${o} = ${o} % ${v} `,myStyle,myStyleFormula,myStyleData,(o % v));
    console.log(`%cAbreviado: %cx %= y, %c${o} = ${v}`,myStyle,myStyleFormula,myStyleData,(o %= v));
console.groupEnd();

let p = 5, h = 2;//Operador Exponenciacion 
console.group(`%cOperador Exponenciacion '**'`,myStyleMenssage);
    console.log(`%cSignificado: %cx = x ** y,%c${p} = ${p} ** ${h} `,myStyle,myStyleFormula,myStyleData,(p ** h));
    console.log(`%cAbreviado: %cx **= y, %c${p} = ${h}`,myStyle,myStyleFormula,myStyleData,(p **= h));
console.groupEnd();





// Operador adicion '+'
// let x = 5;
// let y = 20;

// console.log(`Variable x: `,x);
// console.log(`Variable y: `,y);
// x += y;
// x = x + y;
// console.log(`Variable x Resultado: `,x);
// console.log(`Variable y: `,y);







//Operador de Asignacion 'Variables'
// let nombre = "Miguel Angel";
// let apellido = "Castro Escamilla";

// console.log(nombre);
// nombre = apellido;
// console.log(nombre);

