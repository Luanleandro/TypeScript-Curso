// let dados = {
//   nome: 'Cafunga',
//   idade: 10,
//   status: true,
//   ola: () => console.log(dados.nome),
//   info: () => console.log(`Você tem apenas ${dados.idade} anos`),
// };

// console.log(typeof dados);
// dados.ola();
// dados.info();

type Person = {
  nome: string;
  idade: number;
  matriculado: boolean;
};

function estaMatriculado(person: Person) {
  console.log(person.matriculado ? 'Está matriculado' : 'Não está matriculado');
}

estaMatriculado({ nome: 'luan', idade: 19, matriculado: false });
