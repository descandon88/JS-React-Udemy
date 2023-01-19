// Desestructuracion de Arreglos

const personajes = ['Goku','Vegeta','Trunks'];
// console.log(personajes[1]);

const [,,p3]=personajes;

console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const {letras,numeros} = retornaArreglo();

// Tarea
// 1. el primero valor del arr se llamara nombre
// 2. se llamara setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log(`${valor+1}`)}]
}

const [nombre, setNombre] = useState(0);
console.log(nombre);
setNombre();
