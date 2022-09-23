// Modifica el programa anterior para que, cuando saquemos el ratón del <div> vuelva a su 
// estado original, sin color de fondo.


const box = document.getElementById('box');

box.addEventListener('mouseenter', () => {
    box.setAttribute('style', 'background-color: red;');
})

box.addEventListener('mouseleave', () => {
    box.setAttribute('style', 'background-color: tranparent;');
})




