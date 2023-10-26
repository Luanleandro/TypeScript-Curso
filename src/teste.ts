function quickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  } else {
    let pivo = array[0];

    let menores = array.slice(1).filter((el) => {
      return el <= pivo;
    });

    let maiores = array.slice(1).filter((el) => {
      return el > pivo;
    });

    return quickSort(menores).concat(pivo, quickSort(maiores));
  }
}

console.log(quickSort([5, 4, 2, 0, 10, 1]))
