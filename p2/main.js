function copiarArreglo(array) {
  return array.map(function(e) {
    return e;
  });
}

var arreglo1 = [1, 2, 3, 4];
arreglo2 = copiarArreglo(arreglo1);
console.log(arreglo1);
console.log(arreglo2);
arreglo2[1] = 8;
console.log(arreglo1);
console.log(arreglo2);
