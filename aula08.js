"use strict";
function estaMatriculado(person) {
    console.log(person.matriculado ? 'Está matriculado' : 'Não está matriculado');
}
estaMatriculado({ nome: 'luan', idade: 19, matriculado: false });
