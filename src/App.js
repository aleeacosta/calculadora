import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import BotonDel from './componentes/botonDel';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

function App() { 

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }; 

  const agregarOperador = valor => {
    if (input){
      setInput(input + valor);
    }
    else {
      alert('Primero debe ingresar un valor para calcular.')
    }
  }; 

  const calcularResultado = () => {
    if (input){
      const resultado = evaluate(input);
      setInput(format(resultado, {precision: 12}) );
    }
    else {
      alert('Primero debe ingresar un valor para calcular.')
    }
  };

  const delInput = () => {
    setInput(input.substring(0, input.length - 1));
  }

  return (
    <div className='app'>
      <div className='contenedor-principal'>        
        <Pantalla input={input} />
        <div className='teclado'>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <BotonDel manejarDel={delInput}>DEL</BotonDel>
            
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarOperador}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarOperador}>-</Boton>  
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarOperador}>.</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarOperador}>/</Boton>
            <Boton manejarClick={agregarOperador}>*</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>CLEAR</BotonClear>
            <Boton manejarClick={calcularResultado}>=</Boton>            
          </div>
        </div>
      </div>     
    </div>
  );
}

export default App;
