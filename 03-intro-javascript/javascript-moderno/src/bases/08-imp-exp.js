// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import heroes, {owners} from './data/heroes';
import heroes from '../data/heroes';



 // Funcion con .find()
 console.log(heroes);
 export const getHeroebyId=(id)=>{
   return heroes.find(heroe=>{
     if (heroe.id===id){return true;}
   });
 }
 console.log(getHeroebyId(1));
// funcion con .filter()
 export const getHeroByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner);
 console.log(getHeroByOwner('Marvel'));


// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="App">

//     </div>
//   )
// }

// export default App;
