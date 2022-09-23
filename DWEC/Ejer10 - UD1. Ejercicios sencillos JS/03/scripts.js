// Modifica el programa del ejercicio 2 para que cuente tanto las ‘a’ minúsculas como las 
// mayúsculas.

const cuentaA = (texto) => {
    const letrasA = Array.from(texto).filter((letra)=>letra.toLowerCase() === 'a');
    document.write("La cadena tiene un total de " + letrasA.length + " letras 'a'");
}

const texto = cuentaA(prompt("Introduce un texto"));

