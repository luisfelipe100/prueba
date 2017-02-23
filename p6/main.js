$(document).ready(function() {
  var contador = 5;

  $(".agregar").click(function() {
    contador++;
    $("li:last-child").after("<li>" + contador + "</li>");
  });

  $(".eliminar").click(function() {
    $("li:first-child").remove();
  });
});
