
let tratarDados = require ('./modulo/tratamento.js')
let mostrar = require('./modulo/calcular.js')
 
const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o seu o valor inicial (0-500): ',function(val01){
    let v1 = Number(tratarDados.tratarSeqInc(val01))

    entradaDeDados.question('Digite o seu o valor final (100-1000): ',function(val02){
        let v2 = Number(tratarDados.tratarSeqFnl(val02))


        console.log()
        console.log('PAR [1]')
        console.log('IMPAR [2]')
        console.log('AMBAS [3]')
        entradaDeDados.question('Qual valor você deseja realizar',function(setOpcao){

        let opcao = Number(tratarDados.tratarOpcao(setOpcao))
            
        let mostrarPares = mostrar.calcSequenciaPar
        let mostrarImpares = mostrar.calcSequenciaImpar
            switch (opcao){ // Fluxo de escolha

                case 1: // Par
                  mostrarPares(v1,v2) 
                break

                case 2: // impar
                 mostrarImpares(v1,v2) 
                break

                case 3: // Ambas

                mostrarPares(v1,v2),
                mostrarImpares(v1,v2)

                break
            }

        })

    })
})
