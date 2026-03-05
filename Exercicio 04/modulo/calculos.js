const calcularFatorial = function(valorRecebido){

    let numero = valorRecebido
    let conta = ""
    let fatorial = 1

    for (let i = numero; i >= 1; i--) {

    fatorial = fatorial * i

    conta = conta + i

    if (i > 1) {
        conta = conta + "x"
    }

    console.log(conta + ":" + fatorial)
 }
}

module.exports={

    calcularFatorial
}

