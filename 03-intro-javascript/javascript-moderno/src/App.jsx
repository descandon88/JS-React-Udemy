// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import heroes from './data/heroes';

function App() {
  // const [count, setCount] = useState(0)
  // Funcion con .find()

//   return (
//     <div className="App">
// {/*   
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </div>
//   )
}

console.log(heroes);
export const getHeroebyId=(id)=>{
   return heroes.find(heroe=>{
     if (heroe.id===id){return true;}
   });
 }
 console.log(getHeroebyId(3));

 export const getHeroByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner);
 console.log(getHeroByOwner('Marvel'));


export default App;
