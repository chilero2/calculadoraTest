const matPalabras = ['hola', 'escucha', 'asi', 'esternocleidomastoideo', 'holas', 'pantalla']

for (const palabra of matPalabras) {
    console.log(palabra + ' ' +  palabra.includes('h') + '\n') 
}

console.log(matPalabras.includes('escucha'))

console.log(matPalabras.find(element => element.length > 5))

console.log(matPalabras.indexOf('botella'))

console.log(matPalabras.filter((palabra) => palabra.length === 5))




