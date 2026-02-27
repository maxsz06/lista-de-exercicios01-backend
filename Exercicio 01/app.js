/*************************************
 * Objetivo: Entrada de dados
 * Autor: Maxwillian
 * Data:27/02/2025
 * ***********************************/

let tratarDados = require('./modulo/tratamento.js')
let realizarCalculo = require('./modulo/calcularIMC.js')

const readLine = require('readline')

const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o seu peso (KG): ', function (setPeso) {
    let peso = setPeso


    entradaDeDados.question('Digite sua altura: ', function (setAltura) {
        let altura = setAltura

        let pesoDef = tratarDados.tratamentoDeDados(setPeso)
        let alturaDef = tratarDados.tratamentoDeDados(setAltura)
        //console.log(typeof pesoDef, typeof alturaDef)

        let imc = realizarCalculo.realizarCalculos(pesoDef, alturaDef)

        if (imc < 18.5) {
          console.log('classificacao = Classificação: Abaixo do peso')
        } else if (imc < 25) {
            console.log('classificacao = Classificação: Peso Normal')
        } else if (imc < 30) {
            console.log ('classificacao = "Classificação: Levemente acima do peso')
        } else if (imc < 35) {
            console.log ('classificacao = Classificação: Obesidade grau 1')
        } else if (imc < 40) {
           console.log  (' classificacao = Classificação: Obesidade grau 2')
        } else {
            console.log ('classificacao = "Classificação: Obesidade grau 3')
        }



    }) // Fechamento Dois    
})// Fechamento um
