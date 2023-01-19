import React from 'react'
import PropTypes from "prop-types";
import './counterApp.css';

export const CounterApp = ({value}) => {
    const handleAdd = (e,newValue) =>{
        // console.log('Hola Mundo');
        console.log(newValue);

    }
  return (
    <>
       <h1>CounterApp</h1>
       <h2>{value}</h2> 
       <button onClick={(e)=>{handleAdd(e,'hola')}}>
            +1
       </button>
    </>
  )
}

// export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
  }