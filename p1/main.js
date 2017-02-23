var suma = 0;
do{
  var ingreso = window.prompt("ingresa un número");
  if (ingreso != "fin") {
    if (isNaN(ingreso)) {
      alert("Se debe ingresar un número o la palabra 'fin'");
    }
    else {
      suma += parseFloat(ingreso);
    }
  }
}
while (ingreso != "fin");
console.log(suma)
