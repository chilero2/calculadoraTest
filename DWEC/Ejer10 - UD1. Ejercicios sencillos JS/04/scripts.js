// Escribe un programa en JavaScript que pregunte al usuario qué color de fondo prefiere. El 
// usuario responderá ‘R’ para rojo, ‘V‘ para verde o ‘A’ para azul. Una vez respondido, el fondo 
// del documento cambiará al color escogido. 

const cambiaColor = (letra) => {
    if(letra.toLowerCase() === 'v') document.bgColor = "#008f39";
    else if (letra.toLowerCase() === 'r') document.bgColor = "#cb3234";
    else if (letra.toLowerCase() ===  'a') document.bgColor = "#0000ff";
}

cambiaColor(prompt("Elige un color"));