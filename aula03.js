"use strict";
class Curso {
    nome = null;
    duracao = null;
    constructor(nome, duracao) {
        this.nome = nome;
        this.duracao = duracao;
    }
}
const c1 = new Curso('ADS', 200);
console.log(c1.nome);
console.log(c1.duracao);
