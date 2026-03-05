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

module.exports = { 

    tratarFatoriaInc,

}