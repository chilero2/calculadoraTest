// Escribe un programa en JavaScript que pida al usuario que introduzca una cadena de texto. 
// Mediante una ventana emergente, el programa mostrará cuántas letras ‘a’ hay en la cadena 
// de texto introducida.

const cuentaA = (texto) => {
    const letrasA = Array.from(texto).filter((letra)=>letra === 'a');
    alert("La cadena tiene un total de " + letrasA.length + " letras 'a'");
}

cuentaA(prompt("Introduce un texto"));

