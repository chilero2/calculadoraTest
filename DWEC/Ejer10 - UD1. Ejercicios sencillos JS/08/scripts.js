// Diseña un programa en JavaScript que permita al usuario introducir tres valores numéricos 
// en un pequeño formulario. Al enviar el formulario, el programa informará, mediante ventana 
// emergente, de cuál de los tres números introducidos es el mayor. Nota: el programa nunca 
// seleccionará el número mayor si alguno de los campos está en blanco o el valor que contiene 
// no es numérico.


const submit = document.getElementById('submit');
const formulario = document.getElementById('formulario');



const esMayor = (... numbers) => {
    const mat = numbers.sort((a,b) => b-a);
    return mat[0];

}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    if(Number(formulario.n1.value) && Number(formulario.n2.value) && Number(formulario.n3.value)) {
        alert("el número mayor es " + esMayor(formulario.n1.value, formulario.n2.value, formulario.n3.value));
    }
})









