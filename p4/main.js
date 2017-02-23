var n = +window.prompt("Ingresa un número N");

for (var i = 0; i < n; i++) {
  var stringLineaN = "";
  for (var j = 0; j < n; i++) {
    if(i===0 || i===(n-1)){
      stringLineaN += "*";
    }
    else {
      if(j===0 || j===(n-1)){
        stringLineaN += "*";
      }
      else {
        stringLineaN += " ";
      }
    }
  }
  console.log(stringLineaN);
}
