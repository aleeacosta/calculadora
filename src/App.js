import './App.css';
import './styles/header.css'
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import BotonDel from './componentes/botonDel';
import BotonTheme from './componentes/botonTheme';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

function App() { 

  const [input, setInput] = useState('');
  
  const [theme, setTheme] = useState('');

  const [transparente, setTransparente] = useState('');
  const [transparente2, setTransparente2] = useState('boton-transparente');
  const [transparente3, setTransparente3] = useState('boton-transparente');

  const botonTheme1 = () => {
    setTheme('');
    setTransparente('')
    setTransparente2('boton-transparente');
    setTransparente3('boton-transparente');
  };
  
  const botonTheme2 = () => {
    setTheme('theme2');
    setTransparente('boton-transparente')
    setTransparente2('');
    setTransparente3('boton-transparente');
  }; 

  const botonTheme3 = () => {
    setTheme('theme3');
    setTransparente('boton-transparente')
    setTransparente2('boton-transparente');
    setTransparente3('');
  }; 

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
      <div className={`contenedor-principal ${theme}`}>  
        <div className='header'>                    
          <p>calc</p>
          <div className='contenedor-theme'>
            <div>THEME</div>
            <div className='contenedor-boton'>
              <div className='numeros'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
              <div className='botones'>
                <BotonTheme clase={`boton-rojo ${transparente}`} manejarTheme={() => botonTheme1()}/>
                <BotonTheme clase={`boton-rojo ${transparente2}`} manejarTheme={() => botonTheme2()}/>
                <BotonTheme clase={`boton-rojo ${transparente3}`} manejarTheme={() => botonTheme3()}/>
              </div>
            </div>
          </div>
        </div>

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
