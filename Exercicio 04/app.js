
let tratar = require('./modulo/tratamento.js')

const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDeDados.question('Digite o Fatorial do seu nomero Inicial:', function (setNumber) {
    let num = tratar.tratarFatoriaInc(setNumber)
    let fatorial = Number(num)

    // realizar calculo
    const valorInicial = 1

    while (valorInicial<fatorial) {
        
        console.log(valorInicial)


                valorInicial++
    }

})