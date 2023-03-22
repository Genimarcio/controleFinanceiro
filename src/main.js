function calcularTotal() {
  var total = 0;
  var quantidades = document.getElementsByName("quantidade");
  for (var i = 0; i < quantidades.length; i++) {
    total += parseInt(quantidades[i].value);
  }
  document.getElementById("total").innerHTML = total;
}