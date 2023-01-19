//Desestructuracion de Objetos
// Asignacion Desestructuracion
const heroe = {
    name: 'tony',
    edad:45,
    clave:'Ironman'
}

const { name ,edad,clave, } = heroe;
console.log(clave);

console.log(name);

const retornaPersona = ({edad,clave, rango='General'})=>{
    // const { name ,edad,clave, } =usuario;
    console.log(edad, clave, name, rango);

}

retornaPersona(heroe);

// Ejercicio - desestructuracion


const heroe2 = {
    name: 'tony',
    edad:45,
    clave:'Ironman',
 
}

const useContext =({clave,edad,rango='General'},)=>{
    return {
        nombreClave:clave,
        anios:edad,
        latlng: {
            lat:14.1232,
            lng:-12.3232
        }
    }
}
// const {nombreClave,anios,latlng:{lat,lng}} = useContext(heroe2);
const {nombreClave,anios, latlng} = useContext(heroe2);
const {lat,lng} = latlng;

// console.log(nombreClave, anios, lat,lng);
console.log(nombreClave, anios);
console.log( lat,lng);
