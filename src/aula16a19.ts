// Class

class Computador {
  public nome: string; // Public -> Você altera em qualquer escobo
  private ram: number; // Private -> Você só pode alterar dentro da classe
  private cpu: number; 
  protected ligado: boolean; // Protected -> você altera dentro da classe e nos filhos dela

  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }

  info(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Ram: ${this.ram}`);
    console.log(`CPU: ${this.cpu}`);
    console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
    console.log(`----------------------`);
  }

  ligar() {
    this.ligado = true;
  }

  desliga() {
    this.ligado = false;
  }

  upgradeRam(quantidade: number) {
    if (0 < quantidade && quantidade <= 128) {
      this.ram = quantidade;
    } else {
      console.log(`Quantidade: ${quantidade} é inválida`)
    }
  }
}
const comp1 = new Computador('computador teste', 16, 4.25);
const comp2 = new Computador('computador rapido', 64, 5);
const comp3 = new Computador('computador lento', 4, 2.25);

comp1.nome = 'computador gamer';
comp1.ligar();

comp1.upgradeRam(32)
comp1.info();

// console.log(comp1.nome = "a");  propriedade nome é apenas para leitura

// class TwoPoints {
//   x: number;
//   y: number;
//   constructor(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const points = new TwoPoints();
// console.log(points.x, points.y);
