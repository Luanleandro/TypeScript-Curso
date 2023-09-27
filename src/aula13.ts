interface Cadastro {
  user: string;
  pass: string;
  idade?: number;
}

function logarUsuario(user: string, pass: string, idade?: number): Cadastro {
  let dados = { user, pass, idade };
  return dados;
}

function soma(n1:number=0, n2:number=0): number {
  return n1 + n2
}

console.log(soma(15))