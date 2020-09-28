//Diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//Calcular precio por marca
export function calcularMarca(marca) {
    let incremento;
    switch(marca) {
       case 'Europeo':
           incremento = 1.30;
           break;
        case 'Americano': 
            incremento = 1.15;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;    
        default:
           break; 
    }

    return incremento;
}