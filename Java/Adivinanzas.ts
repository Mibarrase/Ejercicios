let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let suposicion = 5; 

for (let i = 0; i < 3; i++) {
  if (suposicion === numeroAleatorio) {
    console.log("¡Felicidades! Adivinaste el número.");
    break;
  } else if (suposicion > numeroAleatorio) {
    console.log("La suposición es demasiado alta.");
  } else {
    console.log("La suposición es demasiado baja.");
  }
  if (i === 2) {
    console.log(`Has perdido. El número era ${numeroAleatorio}.`);
  }
}