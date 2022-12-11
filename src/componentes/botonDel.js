import React from 'react';
import '../styles/boton.css'

const BotonDel = (props) => (
  <div 
    className='boton boton-clear'
    onClick={props.manejarDel} >
    {props.children}
  </div>    
);

export default BotonDel;