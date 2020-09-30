import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;





function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  
  //Extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
        />
        <Resumen 
          datos={datos}
        />
        <Resultado 
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>     
  );
}

export default App;
