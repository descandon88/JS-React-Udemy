//Promesas
import {getHeroebyId} from './bases/08-imp-exp';
function Index(){ 

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         // console.log('2 segundos despues');
    //         // resolve();
    //         const p1 = getHeroebyId(2);
    //         resolve(p1);
    //         // console.log(heroe)
    //         // reject(`No se pudo encontrar el heroe`);
    //     },2000)
    // });

    // promesa.then(()=>{
    //     // console.log('Then de la promesa');
    //     console.log('heroe',heroe);
    // })
    // .catch( err => console.warn(err));
   
    const getHeroeByIdAsync = (id) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const p1 = getHeroebyId(id);
                if ( p1 ) { 
                    resolve(p1);
                } 
                else 
                {
                    reject(`No se pudo encontrar el heroe`);
                }
            },2000)
        })
    }
    getHeroeByIdAsync(3)
    .then(heroe => console.log('heroe', heroe))
    .catch(console.warn)
}
export default Index;