// Escribe un programa en JavaScript que, a partir de tres botones como los de la imagen, 
// cambie el color de fondo según el botón pulsado. Deberéis implementar el código mediante 
// una función a la que se le pase el color escogido como parámetro de entrada.

const bRojo = document.getElementById('rojo');
const bAzul = document.getElementById('azul');
const bVerde = document.getElementById('verde');

bRojo.addEventListener('click', () => document.bgColor = "#cb3234");
bAzul.addEventListener('click', () => document.bgColor = "#0000ff");
bVerde.addEventListener('click', () => document.bgColor = "#008f39");



