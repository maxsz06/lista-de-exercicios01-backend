/**************************
 * Objetivo:Realizar calculos
 * Autor:Maxwillian
 * Data:27/02/2026
 * ********************* */
    

const realizarCalculos = function(pesoDef,alturaDef){

    let peso = pesoDef
    let altura = alturaDef

    let imc = peso/(altura*altura)

    return Number(imc).toFixed(2) 
}

module.exports={

    realizarCalculos


}