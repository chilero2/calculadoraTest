// Escribe un programa en JavaScript que pregunte al usuario por su nombre y le salude, 
// mediante una ventana emergente, con el mensaje “Hola nombreUsuario”.

const saludar = (nombre) => alert("Hola " + nombre);

nombre = prompt("¿Cuál es tu nombre?");
saludar(nombre);