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
