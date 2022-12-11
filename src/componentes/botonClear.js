import React from 'react';
import '../styles/boton.css'

const BotonClear = (props) => (
  <div 
    className='boton boton-clear'
    onClick={props.manejarClear} >
    {props.children}
  </div>    
);

export default BotonClear;