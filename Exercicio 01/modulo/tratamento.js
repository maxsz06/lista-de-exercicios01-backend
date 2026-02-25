const tratarEntrada = function(setPeso,setAltura){
 
    peso = Number(setPeso)
    altura = Number(setAltura)

    if(setPeso == '' || isNaN(setPeso) || setAltura == ''|| isNaN ((setAltura))){
        console.log('Erro: Valores de entrada errados')
        return false
    }else{
        return true 
    }
}

module.exports={

    tratarEntrada
}