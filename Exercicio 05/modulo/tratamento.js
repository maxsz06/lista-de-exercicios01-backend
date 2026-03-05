const tratarSeqInc = function(valorRecebido){


    if(valorRecebido === ""){
        console.log('Erro: Complete todos os campos')
            return false 
    }else if (valorRecebido < 0 || valorRecebido > 500){
        console.log('Erro:Apenas valores entre 0 e 500')
            return false
    }else{
        return valorRecebido
    }

}

const tratarSeqFnl = function(valorRecebido){

    if(valorRecebido === ""){
        console.log('Erro: Complete todos os campos')
            return false
    }else if (valorRecebido < 100 || valorRecebido > 1000){
        console.log('Erro:Apenas valores entre 100 e 1000')
            return false
    }else{
        return valorRecebido
    }
}

const tratarOpcao = function (opcao){

    if (opcao === ''){
        console.log('Erro:Preencha a entrada')
            return false    
    }else if (isNaN(opcao)){
        console.log('Erro: Apenas Numeros')
            return false
    }else{
            return opcao
    }

}

module.exports = {

    tratarSeqFnl,
    tratarSeqInc,
    tratarOpcao
}