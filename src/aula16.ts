// Class

class Computador {
  readonly nome: string;
  ram: number;
  cpu: number;
  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
  }
}

const comp1 = new Computador('teste', 16, 4.25);
// console.log(comp1.nome = "a");  propriedade nome é apenas para leitura
console.log(comp1.ram);
console.log(comp1.cpu);

class TwoPoints {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const points = new TwoPoints();
console.log(points.x, points.y);
