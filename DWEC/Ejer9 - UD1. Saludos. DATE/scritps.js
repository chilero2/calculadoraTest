const saludar = () => {
    const date = new Date();
    const hora = date.getHours();
    if( hora > 5 && hora < 13 ) {
        console.log('Buenos días');
    } else if (hora >= 13 && hora < 21) {
        console.log('Buenas tardes');
    } else {
        console.log('Buenas noches');
    }
}

saludar();