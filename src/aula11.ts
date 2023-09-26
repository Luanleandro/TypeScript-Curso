//  Type Assertion e Typecast

let nValor: number;
let sValor: string;
let uValor: unknown;

nValor = 15;
sValor = '2025';
uValor = 10;

nValor = Number.parseInt(sValor); // Converter string para number
sValor = nValor.toString();

console.log(typeof nValor);
console.log(typeof sValor);

// nValor = <number>uValor;
// sValor = <string>uValor;
// sValor += 10;

// console.log(sValor);
// console.log(typeof sValor);
