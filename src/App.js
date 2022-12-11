import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

function App() { 

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }; 

  const calcularResultado = () => {
    if (input){
      const resultado = evaluate(input);
      setInput(format(resultado, {precision: 12}) );
    }
    else {
      alert('Ingrese valores para calcular.')
    }
  };

  return (
    <div className='app'>
      <div className='contenedor-principal'>        
        <Pantalla input={input} />
        <div className='teclado'>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton>DEL</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>  
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
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
