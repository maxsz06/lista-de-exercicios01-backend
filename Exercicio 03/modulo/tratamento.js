/********************
 * Objetivo: Tratar os dados de entrada
 * Autor: Maxwillian Santana
 * Data: 05/03/2026
 * ******************** */

const tratarTabuada =function(valorTabuada){

    if (!valorTabuada || !valorTabuada || !valorTabuada || !valorTabuada) {
        console.error("\n ERRO: Nenhuma entrada de dados poderá ficar sem preenchimento.");
        return false

    }else if(valorTabuada < 2 || valorTabuada > 100 || valorTabuada < 2 || valorTabuada > 100) {
        console.error("\n ERRO: A entrada da tabuada deverá ser entre 2 e 100.");
        
        return false
    }


     return valorTabuada

}

const tratarContador =function(valorContador){

    if (valorContador < 1 || valorContador > 50) {
        console.error("\nERRO: O valor até onde será calculada a tabuada deverá ser entre 1 e 50.");
        
        return false
    }

     return valorContador

}

module.exports={

    tratarTabuada,
    tratarContador
}