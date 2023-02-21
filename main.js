function comprobarEdad() {
    var edad = document.getElementById("edad").value;
  
    if (edad >= 18) {
      document.getElementById("resultado").innerHTML = "Puedes realizar la compra.";
    } else {
      document.getElementById("resultado").innerHTML = "No puedes realizar la compra.";
    }
  }
  
  function calcularComida() {
    var invitados = document.getElementById("invitados").value;
    var comida = 0;
  
    for (var i = 1; i <= invitados; i++) {
      if (i <= 10) {
        comida += 10;
      } else {
        comida += 5;
      }
    }
  
    document.getElementById("comida").innerHTML = "Necesitarás " + comida + " unidades de comida.";
  }