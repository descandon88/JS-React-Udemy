// variables y constantes
const nombre = 'fernando';

let valorDado = 6;

console.log(nombre,valorDado);

const nombreCompleto = ` ${nombre} ${valorDado} `;
console.log(nombreCompleto);
// Template String
function getSaludo (nombre) {
    return 'Hola mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Luciana')}`)


// Objectos Literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat:14.3232,
        lng:34.923321
    }
};

console.table({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter' 

console.table({persona2});

//-- Arreglos-- //

// const arreglo = new Array();
const arreglo = [1,2,3,4]

// agregar el 5
let arreglo2 = [...arreglo,5]; 


const arreglo3 = arreglo2.map(function(numero){
    return 'hola';
})

console.log(arreglo2);
console.log(arreglo3);

// -- Funciones en JS--//
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre)=> {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));


const getUser = ()=> {
    return {
        uid: 'ABC123',
        username: 'El_papi1502'
    }
}

console.log(getUser());

//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const GetUsuarioActivo =(nombre)=>({uid: 'ABC567',username: nombre});

const userActivo = GetUsuarioActivo('Felipe')
console.log(userActivo);
