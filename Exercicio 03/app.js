let tratar = require("./modulo/tratamento.js")

const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

console.log("--- Sistema de Gerenciamento de Tabuada ---");

entradaDeDados.question("Digite a tabuada inicial (2-100): ", function (settInic) {
    let taInic = settInic
    let tInic = Number(tratar.tratarTabuada(settInic))

    entradaDeDados.question("Digite a tabuada final (2-100): ", function (setTFim) {
        let taFim = setTFim
        let tFim = Number(tratar.tratarTabuada(setTFim))



        entradaDeDados.question("Digite o contador inicial(1-50): ", function (setCinic) {
            let ccInic = setCinic
            let scInic = Number(tratar.tratarContador(setCinic))

            entradaDeDados.question("Digite o contador inicial(1-50): ", function (setCfim) {
                let ccFim = setCfim
                let scFim = Number(tratar.tratarContador(setCfim))

                // Mostrar tabuada 

                for (let i = tInic; i <= tFim; i++) {
                    console.log(`\nTabuada do [${i}]`)

                    for (let j = scInic; j <= scFim; j++) {
                        console.log(`${i}x ${j} = ${i * j}`)
                    }
                }
            })

        })
    })
})