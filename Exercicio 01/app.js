
 let tratamento = require('./modulo/tratamento.js')   

const readLine = require('readline')

const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o seu peso (KG): ', function (setPeso) {
    let peso = setPeso

    entradaDeDados.question('Digite a sua altura (m):',function(setAltura){
        let altura = setAltura
       
        let tratarEntrada = tratamento.tratarEntrada(setPeso,setAltura)
        
        let realizarCalculo = calcularImc(setPeso,setAltura)

    })//fechamento 2
})//fechamento 1