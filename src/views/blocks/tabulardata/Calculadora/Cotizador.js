import React, { useState, useEffect } from 'react';

import DropdownMenu from './DropdownMenu';

import banco from './img/banco.png';
import usdt from './img/usdt.png';
import wise from './img/wise_usd.png';
import bitcoin from './img/bitcoin.png';
import ethereum from './img/ethereum.png';



import './Cotizador.css'; // Importar el archivo CSS



const Cotizador = () => {

  const comision = {
    "Compra": 0.96,
    "Venta": 1.04
  }

  const rates = {
  "ARS Pesos Efectivo": {
    "Precio": 1/470,
    "PrecioCompra": 1/470 * comision.Compra,
    "PrecioVenta": 1/470 * comision.Venta
  },
  "USD Efectivo": {
    "Precio": 1,
    "PrecioCompra": 1 * comision.Compra,
    "PrecioVenta": 1 * comision.Venta
  },
  "USDT (Tether)": {
    "Precio": 1,
    "PrecioCompra": 1 * comision.Compra,
    "PrecioVenta": 1 * comision.Venta
  },
  "Bitcoin": {
    "Precio": 30000,
    "PrecioCompra": 30000 * comision.Compra,
    "PrecioVenta": 30000 * comision.Venta
  },
  "Ethereum": {
    "Precio": 3000,
    "PrecioCompra": 3000 * comision.Compra,
    "PrecioVenta": 3000 * comision.Venta
  }
}; 


  const options = [
    { value: 'ARS Pesos Efectivo', label: 'ARS Pesos Efectivo', image: banco },
    { value: 'USDT (Tether)', label: 'USDT (Tether)', image: usdt },
    { value: 'USD Efectivo', label: 'USD Efectivo', image: wise },
    { value: 'Bitcoin', label: 'Bitcoin', image: bitcoin },
    { value: 'Ethereum', label: 'Ethereum', image: ethereum }
  ];

  const [clienteInputValue, setClienteInputValue] = useState('');
  const [exchangeInputValue, setExchangeInputValue] = useState('');

  const [clienteSelectedOption, setClienteSelectedOption] = useState(options[1]);
  const [exchangeSelectedOption, setExchangeSelectedOption] = useState(options[3]);


  const handleClienteInputChange = (value) => {
    setClienteInputValue(value);


  
    if (exchangeSelectedOption && rates[exchangeSelectedOption.value]) {
      const tasaCambio = rates[exchangeSelectedOption.value].PrecioVenta;
      const newValue = (parseFloat(value) * rates[clienteSelectedOption.value].PrecioCompra) / tasaCambio;
      
      if (exchangeSelectedOption.value === 'Bitcoin' || exchangeSelectedOption.value === 'Ethereum'){
      setExchangeInputValue(newValue.toFixed(8).toString());
      }else{
        setExchangeInputValue(newValue.toFixed(2).toString());
      }
    }

  };

  const handleExchangeInputChange = (value) => {
    setExchangeInputValue(value);


    if (clienteSelectedOption && rates[clienteSelectedOption.value]) {
      const tasaCambio = rates[clienteSelectedOption.value].PrecioCompra;
      const newValue = (parseFloat(value) * rates[exchangeSelectedOption.value].PrecioVenta) / tasaCambio;
      
      if (clienteSelectedOption.value === 'Bitcoin' || clienteSelectedOption.value === 'Ethereum'){
        setClienteInputValue(newValue.toFixed(8).toString());
        }else{
          setClienteInputValue(newValue.toFixed(2).toString());
        }
    }

  };





  const handleClienteCambioMetodoPago = (option) => {
    const previousOption = clienteSelectedOption;
    setClienteSelectedOption(option);
  
    if (rates[option.value] && rates[previousOption.value]) {
     
      const previousNeto = rates[previousOption.value].Precio * clienteInputValue;

      const newPrecio = rates[option.value].Precio;

      const newValue = previousNeto / newPrecio;



      if (option.value === 'Bitcoin' || option.value === 'Ethereum'){
        setClienteInputValue(newValue.toFixed(8).toString());
        }else{
          setClienteInputValue(newValue.toFixed(2).toString());
        }
    }
  };
  
  const handleExchangeCambioMetodoPago = (option) => {
    /* Guarda el Metodo de pago Anterior en una const local */
    const previousOption = exchangeSelectedOption;
    /* Guarda el nuevo estado que vino del parametro de entrada del evento en el estado de opcion seleccionada por exchange */
    setExchangeSelectedOption(option);
  
    /* consulta si el metodo de pago anterior y el actual tienen existencia en el rates */
    if (rates[option.value] && rates[previousOption.value]) {
     
      /* Calcula el precio neto que tenia anteriormente */
      const previousNeto = rates[previousOption.value].Precio * exchangeInputValue;
      /* Busca el precio neto sin comision del metodo de pago seleccionado actualmente */
      const newPrecio = rates[option.value].Precio;
      /* */
      const newValue = previousNeto / newPrecio;
      /* */



      if (option.value === 'Bitcoin' || option.value === 'Ethereum'){
        setExchangeInputValue(newValue.toFixed(8).toString());
        }else{
          setExchangeInputValue(newValue.toFixed(2).toString());
        }
    }
  };

  useEffect(() => {

    handleClienteInputChange("100.00");

    return () => {
      
    };
  }, []);

  return (
    <div className='all'>

      
      <div className="cliente">
        <DropdownMenu
          cambioValor={handleClienteInputChange}
          cambioMetodoPago={handleClienteCambioMetodoPago}
          inputValue={clienteInputValue}
          inputOption={clienteSelectedOption}
          options={options}
        />
        Valor del input del cliente: {clienteInputValue}
        <br />
        Método de pago seleccionado: {clienteSelectedOption ? clienteSelectedOption.value : ''}
      </div>



      <div className="exchange">
        <DropdownMenu
          cambioValor={handleExchangeInputChange}
          cambioMetodoPago={handleExchangeCambioMetodoPago}
          inputValue={exchangeInputValue}
          inputOption={exchangeSelectedOption}
          options={options}
        />
        Valor del input del exchange: {exchangeInputValue}
        <br />
        Método de pago seleccionado: {exchangeSelectedOption ? exchangeSelectedOption.value : ''}
      </div>


                
    </div>
  );
};

export default Cotizador;
