import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './DropdownMenu.css'; // Importar el archivo CSS





function DropdownMenu({ cambioValor, cambioMetodoPago, inputValue, inputOption, options }) {
 

  const [selectedOption, setSelectedOption] = useState(inputOption);
  const [isListOpen, setIsListOpen] = useState(false); // Estado para controlar si la lista está abierta o cerrada

  

  const close = () => {
    console.log('me cierro')
    setIsListOpen(false);
  };

  const open = () => {
    
    console.log('me abro?')
    if(!isListOpen){
    setIsListOpen(true);
    console.log('me abri')
    }else{
        setIsListOpen(false);
        console.log('no, me cierro')
    }
  };

  const cambio = (event) => {
    console.log('valor: ',event);
    setSelectedOption(event);
    close();
    cambioMetodoPago(event);
  };

  useEffect(() => {
    const handleTouchOutside = (event) => {
      if (!event.target.closest('.lista')) {
        close();
      }
    };

    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    const {value} = event.target;
    // Pasar el valor al componente padre
    cambioValor(value);
  };


  return (
    <div>
      
  {/* Necesitamos un input numerico */}
  <input type="number" value={inputValue} onChange={handleInputChange} />

{/* Imagen/Boton apretable + menu lista desplegable + Metodo de pago actual */}

      <button type="button" onClick={open} onBlur={close}>
        <img src={selectedOption.image} alt={selectedOption.label}/>
      </button>

      {/* Seleccionaste: {selectedOption.value} */}

      {/* Lista metodos de pago, renderizado condicional */}

        {/* CUIDADO VALOR DE ALTURA HARDCODEADO */}
          {/* CUIDADO VALOR DE ALTURA HARDCODEADO */}
            {/* CUIDADO VALOR DE ALTURA HARDCODEADO */}
        
      <div className={classNames('lista', { 'lista-open': isListOpen })} style={{ height: isListOpen ? '350px' : '0px' }}>

      {isListOpen && (
        <div>
          {options.map((option) => (
            <div key={option.value} onMouseDown={() => cambio(option)}>
              <img src={option.image} alt="" />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}

      </div>

    </div> 
  );
}

export default DropdownMenu;
