"use strict";
let numeros = [100, 200, 300];
let numeros2 = [100, 200, 300];
numeros.push(50);
numeros.unshift(250);
numeros2.push('Olá');
console.log(numeros, numeros2);
let listaLeitura = [50, 30, 20, 78];
listaLeitura.forEach((a, b) => {
    console.log(a, b);
});
let employee = {
    code: 10,
    name: "John"
};
