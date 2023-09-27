// Paramêtros REST com SPREAD
function fsomar(target: number, ...n: number[]): number[] | undefined {
  for (let i = 0; i < n.length; i++) {
    let num1 = n[i];
    for (let j = i + 1; j < n.length; j++) {
      let num2 = n[j];
      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
}

console.log(fsomar(6, 3, 3, 4, 2, 0));
