/**
 * FILTER = FILTRAR
 */

//para remover elementos indesejados

const array = [1,2,3,3,4,5,6,7,8,8,8,9,9,9]

const arrayFiltrada = array.filter( (elemento, index, array) => array.indexOf(elemento) === index)

console.log(arrayFiltrada)