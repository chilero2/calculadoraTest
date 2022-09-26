//Creación del objeto Empelado

class Empleado {
    constructor(nombre, departamento) {
        this.nombre = nombre || '';
        this.departamento = departamento || 'informático';
    }   

}

//Creación del objeto Director, que hereda de empleado y tiene un método común a todos los directores para listar información
class Director extends Empleado {
    constructor(nombre, departamento) {
        super(nombre, departamento)
        this.informes = [];
    }
    listarInformacion() {
        let mensaje = `Director --> ${this.nombre}\n `;
        if(this.informes.length !== 0) {
        mensaje += `-----------******** INFORMES DE : ${this.nombre}\n`;
        for (const informe of this.informes) {
            mensaje += `---------------------************ ${informe}\n`;
        }
    }
    return mensaje;    
    }
}


//Creación del objeto Trabajador, que hereda de empleado

class Trabajador extends Empleado {
    constructor(nombre, departamento) {
        super(nombre, departamento);
        this.proyectos = [];
    }

}

//Creación del objeto ingeniero, que hereda de trabajador y crear una función para que imprima su información

class Ingeniero extends Trabajador {
    constructor(nombre, departamento) {
        super(nombre)
        this.departamento = departamento || 'Ingeniería';
        this.lenguajeProgramacion = '';
    }

    listarInformacion() {
        return `------------------************* El ${this.nombre} usa el lenguaje de programación ${this.lenguajeProgramacion} en el departamento de ${this.departamento} '\n`;
    }
}

// Pruebas

const pepito = new Director();
pepito.nombre = 'Pepito';
const manolo = new Director('Manolo', 'Cuentas');
manolo.informes.push('Informe producción enero');
manolo.informes.push('Informe producción febrero');
manolo.informes.push('Informe producción marzo');
const hortensia = new Director();
hortensia.nombre = 'Hortensia';
hortensia.informes.push('Informe despido becario');

const juan = new Ingeniero('Juan', 'Ingeniería informática');
juan.lenguajeProgramacion = 'JAVA';
const carmen = new Ingeniero();
carmen.nombre = 'Carmen';
carmen.lenguajeProgramacion = 'C++';
const pablo = new Ingeniero();
pablo.nombre = 'Pablo';
pablo.lenguajeProgramacion = 'JS';
const emilio = new Ingeniero();
emilio.nombre = 'Emilio';
emilio.lenguajeProgramacion = 'HTML5';

const matEmpleados = [pepito, manolo, hortensia, juan, carmen, pablo, emilio];

const imprimirInfo = (matEmpleados) => {
    console.log('-----------------*************** NOMBRE DIRECTORES **********************-----------');
    for (const empleado of matEmpleados) {
        if (empleado instanceof Director) {
            console.log(empleado.listarInformacion());
        }
    }
    console.log('-----------------*************** INGENIEROS **********************-----------');
    for (const empleado of matEmpleados) {
        if (empleado instanceof Ingeniero) {
            console.log(empleado.listarInformacion());
        }
    }
}

imprimirInfo(matEmpleados);



