"use strict";
function cadastrar(user, pass) {
    return { user, pass };
}
const usuario = cadastrar('RushPllays', 'luludaPuma32');
console.log(usuario.pass);
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(5, 25));
let lista = [];
function listaString(elemento1) {
    lista.push(elemento1);
    return lista;
}
listaString('gato');
listaString('boi');
listaString('lobo');
console.log(listaString('cachorro'));
