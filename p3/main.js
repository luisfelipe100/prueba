function Telefono(numero, marca, color) {
  this.numero = numero;
  this.marca = marca;
  this.color = color;
  this.contador = 0;
  this.marcar = function(numeroAMarcar) {
    this.contador++;
  }
}


var tel1 = new Telefono(1234, "lg", "negro");
console.log(tel1.contador);
tel1.marcar(123);
console.log(tel1.contador);
