let mensajeCodificado = "El gato rojo tiene hambre";
let decodificaciones = {
  "gato": "agente",
  "rojo": "secreto",
  "hambre": "misión"
};
let mensajeDecodificado = mensajeCodificado.split(" ").map(palabra => {
  return decodificaciones[palabra] || palabra;
}).join(" ");
console.log(mensajeDecodificado);
