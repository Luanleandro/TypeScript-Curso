// Arrow Function

const teste2 = (txt: string): void => {
  console.log(txt);
};

teste2('o melhor para a gente');

let valores = [15, 20, 45, 30];

const somaArray = (numeros: number[]): number => {
  let acumulador: number = 0;
  numeros.forEach((numero) => {
    acumulador += numero;
  });
  return acumulador;
};
