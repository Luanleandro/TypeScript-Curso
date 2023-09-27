// Funções

interface Cadastro {
  user: string;
  pass: string;
  idade?: number;
}

function cadastrar(user: string, pass: string): Cadastro {
  return { user, pass };
}

const usuario = cadastrar('RushPllays', 'luludaPuma32');
console.log(usuario.pass);

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(5, 25));

let lista: string[] = [];

function listaString(elemento1: string): ReadonlyArray<string> {
  lista.push(elemento1);
  return lista;
}

listaString('gato');
listaString('boi');
listaString('lobo');
console.log(listaString('cachorro'));

