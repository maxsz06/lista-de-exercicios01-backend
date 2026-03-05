
let tratar = require('./modulo/tratamento.js')
let calculo = require('./modulo/calculos.js')

const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDeDados.question('Ditite o Numero do seu fatorial:',function(v1){  // Numero
    let valor1 = tratar.tratamentoDeDados(v1)



    let valorFatorial = calculo.calcularFatorial(valor1)
})


