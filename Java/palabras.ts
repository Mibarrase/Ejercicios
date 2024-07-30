let frase = "Hola mundo";
let palabrasInvertidas = frase.split(" ").map(palabra => {
  return palabra.split("").reverse().join("");
}).join(" ");
console.log(palabrasInvertidas);
