// Operador condicional Ternario
function Index(){ 
    const activo = true;
    let mensaje = '';
    if (activo){
        mensaje='Activo';
    } else {
        mensaje = 'Inactivo';
    }
    //operacion condicional ternario
    const message = (activo) ? 'Activo' : 'Inactivo';
    console.log(message);
    // Version 
    const messagev2 = activo && 'Activo' // por ser condicional and
    console.log(messagev2);
}
export default Index;