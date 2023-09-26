"use strict";
const teste2 = (txt) => {
    console.log(txt);
};
teste2('o melhor para a gente');
let valores = [15, 20, 45, 30];
const somaArray = (numeros) => {
    let acumulador = 0;
    numeros.forEach((numero) => {
        acumulador += numero;
    });
    return acumulador;
};
