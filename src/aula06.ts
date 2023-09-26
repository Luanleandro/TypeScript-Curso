let numeros: Array<number> = [100, 200, 300];
// let numeros: number[] = [100, 200, 300];
let numeros2: (string | number)[] = [100, 200, 300]; // Array com união de tipos
numeros.push(50);
numeros.unshift(250);

numeros2.push('Olá');

console.log(numeros, numeros2);

let listaLeitura: ReadonlyArray<number> = [50, 30, 20, 78];

listaLeitura.forEach((a: number, b: number) => {
  console.log(a, b);
});

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

let employee = {
  code: 10,
  name: "John"
}