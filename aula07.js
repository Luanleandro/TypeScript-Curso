"use strict";
let coisas = ['Arroz', 20, true];
coisas.push(30);
console.log(coisas.length);
function setCoordinate(coord) {
    const [x, y, z] = coord;
    console.log(coord.length);
}
setCoordinate([5, 5, 10]);
const a = ['Hello world', 10];
const b = ['Hello world', 10, false];
const c = ['Hello world', 10, false, true, false];
