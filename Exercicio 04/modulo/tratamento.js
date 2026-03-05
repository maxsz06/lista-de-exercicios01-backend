const tratarFatoriaInc = function(setNumber){

    if(setNumber ===''|| setNumber === ''){
        console.log('Erro: Imcompleto')
            return false
    }else if(setNumber <=0 || setNumber > 500){
        console.log('Erro: Apenas Numero entre 1 e 500')
            return false
    }

    return setNumber

}

const tratamentoDeDados = function (numero) {

    let setNumero = numero.replace(",", ".")

    if (setNumero === '') {
        console.log('Preencha os Campos!')
        return false
    } else if (isNaN(setNumero)) {
        console.log('Opção Invalida: Apenas Numeros')
        return false
    } else {

        return Number(setNumero)
    }

}

module.exports = { 

    tratarFatoriaInc,
    tratamentoDeDados

}