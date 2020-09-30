import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;



const Resumen = ({ datos }) => {
    
    //Extraer datos
    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan === '' ){
        return null;
    }

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: <span>{primerMayuscula(marca)}</span></li>
                <li>Plan: <span>{primerMayuscula(plan)}</span></li>
                <li>Año del automóvil: <span>{year}</span></li>
            </ul>
        </ContenedorResumen>
        
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
  };

export default Resumen;