let mensaje = "hola";
let desplazamiento = 3;
let mensajeCifrado = "";
for (let i = 0; i < mensaje.length; i++) {
  let codigo = mensaje.charCodeAt(i);
  if (codigo >= 97 && codigo <= 122) { 
    mensajeCifrado += String.fromCharCode((codigo - 97 + desplazamiento) % 26 + 97);
  } else {
    mensajeCifrado += mensaje[i];
  }
}
console.log(`Mensaje cifrado: ${mensajeCifrado}`);
