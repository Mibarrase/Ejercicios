function validarTarjeta(numero) {
    let digitos = numero.split("").reverse().map(Number);
    let suma = digitos.reduce((acc, digito, idx) => {
      if (idx % 2 === 1) {
        digito *= 2;
        if (digito > 9) digito -= 9;
      }
      return acc + digito;
    }, 0);
    return suma % 10 === 0;
  }
  let numeroTarjeta = "4532015112830366";
  console.log(validarTarjeta(numeroTarjeta) ? "Tarjeta válida" : "Tarjeta no válida");
  