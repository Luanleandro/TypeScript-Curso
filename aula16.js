"use strict";
class Computador {
    nome;
    ram;
    cpu;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }
}
const comp1 = new Computador('teste', 16, 4.25);
console.log(comp1.ram);
console.log(comp1.cpu);
class TwoPoints {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
const points = new TwoPoints();
console.log(points.x, points.y);
