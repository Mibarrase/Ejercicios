let agendaTelefonica = {
    "Juan Pérez": "123-456-7890",
    "Ana López": "987-654-3210"
  };
  let nombreContacto = "Ana López";
  if (agendaTelefonica[nombreContacto]) {
    console.log(`El número de ${nombreContacto} es ${agendaTelefonica[nombreContacto]}`);
  } else {
    console.log("Contacto no encontrado");
  }