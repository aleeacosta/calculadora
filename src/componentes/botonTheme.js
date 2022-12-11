import React from 'react';
import '../styles/header.css';

const BotonTheme = (props) => (            
  <div>
    <span
      className={props.clase}
      onClick={props.manejarTheme}>
    </span>
  </div>
);    


export default BotonTheme;