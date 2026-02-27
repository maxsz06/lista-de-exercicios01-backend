const tratarInformacoes = function(dadosString){

    if (!isNaN(dadosString)){
        console.log('Dados Incorretos')
            return false
    }else if(dadosString === ""){
        console.log('Preencha todos os campos')
            return false
    }else{
        return String(dadosString)
    }

}

module.exports={
    tratarInformacoes
}