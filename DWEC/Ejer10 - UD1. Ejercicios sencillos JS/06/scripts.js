// Escribe un programa en JavaScript que contenga un elemento <div>. Al pasar el ratón por 
// encima de dicho elemento, deberá cambiar su color de fondo (solamente el del <div>) a 
// cualquier color que queráis.

const box = document.getElementById('box');

box.addEventListener('mouseenter', () => {
    box.setAttribute('style', 'background-color: red;');
})





