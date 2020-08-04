$("select").on("change", function() {
  var opcion = $(this).val();
  switch (opcion) {
    case "1":
      $("img").attr("src", "imagenes/fotoEnero.jpeg");
      break;
    case "2":
      $("img").attr("src", "imagenes/fotoFebrero.jpeg");
      break;
    case "3":
      $("img").attr("src", "imagenes/fotoMarzo.jpeg");
      break;
    case "4":
      $("img").attr("src", "imagenes/fotoAbril.jpeg");
      break;
    case "5":
      $("img").attr("src", "imagenes/fotoMayo.jpeg");
      break;
    case "6":
      $("img").attr("src", "imagenes/fotoJunio.jpeg");
      break;
    case "7":
      $("img").attr("src", "imagenes/fotoJulio.jpeg");
      break;
    case "8":
      $("img").attr("src", "imagenes/fotoAgosto.jpg");
      break;
    case "9":
      $("img").attr("src", "imagenes/fotoSeptiembre.jpeg");
      break;
    case "10":
      $("img").attr("src", "imagenes/fotoOctubre.jpeg");
      break;
    case "11":
      $("img").attr("src", "imagenes/fotoNoviembre.jpeg");
      break;
    case "12":
      $("img").attr("src", "imagenes/fotoDiciembre.jpeg");
      break;
      default: $("img").attr("src", "imagenes/logo.jpeg");
      break;

  }

});
