let correoElectronico = "ejemplo@dominio.com";
function validarCorreo(correo) {
  let partes = correo.split("@");
  if (partes.length === 2 && partes[0].length > 0 && partes[1].includes(".")) {
    return "Correo válido";
  } else {
    return "Correo no válido";
  }
}
console.log(validarCorreo(correoElectronico));