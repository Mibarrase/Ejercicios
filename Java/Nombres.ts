let nombre = "Juan";
let apellido = "Pérez";
let nombreUsuario = nombre.slice(0, 3) + apellido.slice(0, 3) + Math.floor(Math.random() * 1000);
console.log(`Nombre de usuario: ${nombreUsuario}`);