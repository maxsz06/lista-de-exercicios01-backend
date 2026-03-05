const calcSequenciaImpar = function(v1, v2){

    let valorInicial = v1
    let valorFinal = v2
    let voltas = 0

    for (valorInicial; valorInicial <= valorFinal; valorInicial++){

        if (valorInicial % 2 !== 0) {
            console.log(valorInicial)
            voltas++
        }

    }

    console.log("Qtd Numeros Impares: " + voltas)

}


const calcSequenciaPar = function(v1, v2){

    let valorInicial = v1
    let valorFinal = v2
    let voltas = 0

    if (valorInicial % 2 !== 0) {
        valorInicial++ 
    }

    for (valorInicial; valorInicial <= valorFinal; valorInicial += 2){
        console.log(valorInicial)
        voltas++
    }

    console.log("Qtd Numeros Pares: " + voltas)

}

module.exports={

    calcSequenciaPar,
    calcSequenciaImpar
}