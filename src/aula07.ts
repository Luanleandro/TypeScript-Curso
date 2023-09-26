let coisas: [string, number, boolean] = ['Arroz', 20, true];

coisas.push(30)
console.log(coisas.length)

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord
  //console.log(z) // Number ou Undefined
  console.log(coord.length)
}

setCoordinate([5, 5, 10])

type StringNumberBooleans = [string, number, ...boolean[]]

const a: StringNumberBooleans = ['Hello world', 10]
const b: StringNumberBooleans = ['Hello world', 10, false]
const c: StringNumberBooleans = ['Hello world', 10, false, true, false]