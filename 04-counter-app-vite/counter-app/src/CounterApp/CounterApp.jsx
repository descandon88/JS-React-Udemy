import React from 'react'
import {useState} from 'react';
import PropTypes from "prop-types";
import './counterApp.css';

export const CounterApp = ({value}) => {
    console.log('render');
    const [counter, setCounter] = useState(value);

    const handleAdd = () =>{
        // console.log('Hola Mundo');
        // console.log(newValue);
        setCounter(counter+1);

    }
    const handleLess = ()=>setCounter(counter-1);
    const handleReset = ()=>setCounter(value);
    

  return (
    <>
       <h1>CounterApp</h1>
       <h2>{counter}</h2> 
       <button onClick={handleAdd}>
            +1
       </button>
       <button onClick={handleLess}>
            -1
       </button>
       <button onClick={handleReset}>Reset</button>
    </>
  )
}

// export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
  }