import React from "react";
import PropTypes from "prop-types";
// import {fragment} from 'react';

export const FirstApp =({ title, subtitle })=> {
    // const newMessage = [1,2,3,4,5];
    const messageFunction =(a,b)=> { 
        const newMessage = {
            message: 'Hola mundo',
            title: 'David',
            edad: 35
            }
        const operacionResult = a + b;
    return operacionResult
    }
    // referencias con funciones
  return (
    <> 
    {/* <h1>{JSON.stringify(messageFunction(3,5))}</h1> */}
    <h1>{ title }</h1>
    {/* <h2>David Escandon</h2> */}
    <h3>{subtitle}</h3>
    </>
  )
}

FirstApp.propTypes = {
  title:PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title:'Ingresa un nombre en el titulo',
  subtitle: 'No hay subtitulo',
  name: 'David Escandon'
}