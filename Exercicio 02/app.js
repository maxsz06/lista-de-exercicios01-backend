/*****************************
 * Objetivo: Entrada de dados
 * Autor: Maxwillian
 * Data: 27/02/2026
 * **************************/
let tratarDados = require('./modulo/tratamento.js')
let calcular = require('./modulo/calculos.js')
let relatorio = require('./modulo/relatorio.js')

const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o nome do aluno(a):', function (setAluno) {
    let aluno = setAluno
    let alunoDef = tratarDados.tratarInformacoes(setAluno)

    console.log('[1]- Masculino')
    console.log('[2]- Ferminino')
    entradaDeDados.question('Digite o Sexo do Aluno(a): ', function (setSexoA) {
        let sexoAluno = setSexoA
        let sexoAlDef = tratarDados.tratarSexoAluno(setSexoA)                            // Sexo Do Aluno

        console.log()

        entradaDeDados.question('Digite o nome do Professor(a):', function (setProfessor) {
            let professor = setAluno
            let professorDef = tratarDados.tratarInformacoes(setProfessor)

            console.log('[1]- Masculino')
            console.log('[2]- Ferminino')
            entradaDeDados.question('Digite o Sexo do Professor(a): ', function (setSexoProf) {
                let sexoProfessor = setSexoProf
                let sexoProfDef = tratarDados.tratarSexoProf(setSexoProf)       //Sexo Prof

                console.log()

                entradaDeDados.question('Digite o Nome do curso:', function (setCurso) {
                    let defCurso = setCurso
                    let curso = tratarDados.tratarInformacoes(setCurso)
                    entradaDeDados.question('Digite o nome da diciplina: ', function (setDiciplina) {
                        let defDiciplina = setDiciplina
                        let diciplina = tratarDados.tratarInformacoes(setCurso)

                        console.log()

                        entradaDeDados.question('Digite a Nota 1:', function (setN1) {
                            let defN1 = setN1
                            let n1 = tratarDados.tratarNotas(setN1)

                            entradaDeDados.question('Digite a Nota 2:', function (setN2) {
                                let defN2 = setN2
                                let n2 = tratarDados.tratarNotas(setN2)

                                entradaDeDados.question('Digite a Nota 3:', function (setN3) {
                                    let defN3 = setN3
                                    let n3 = tratarDados.tratarNotas(setN3)

                                    entradaDeDados.question('Digite a Nota 4:', function (setN4) {
                                        let defN4 = setN4
                                        let n4 = tratarDados.tratarNotas(setN4)


                                        let mediaTotal = calcular.calcularMedia(n1, n2, n3, n4)


                                        if (mediaTotal >= 70) {
                                            let status = 'aprovado'
                                            let relatorioAprovado = relatorio.relatorioAprovado(alunoDef, sexoAlDef, professorDef, sexoProfDef,
                                                curso, diciplina, status, n1, n2, n3, n4, mediaTotal)

                                        } else if (mediaTotal <= 49.9) {
                                            let status = 'recuperação'

                                            entradaDeDados.question('Digite a nota de recuperação: ', function (setRecuperação) {
                                                let nRecuperacao = setRecuperação
                                                let nr = tratarDados.tratarNotas(setRecuperação)

                                                let mediaRecuperacao = calcular.calcularRecuperacao(mediaTotal, nr)

                                                if (mediaRecuperacao <= 49.9) {
                                                    let status = 'reprovado'
                                                    let relatorioReprovado = relatorio.relatorioReprovado(alunoDef, sexoAlDef, professorDef, sexoProfDef,
                                                        curso, diciplina, status, n1, n2, n3, n4, mediaTotal)

                                                } else if (mediaRecuperacao >= 50) {
                                                    let status = 'aprovado na recuperacao'
                                                    let relatorioAprovadoRecuperacao = relatorio.relatorioRecuperacao(alunoDef, sexoAlDef, professorDef, sexoProfDef,
                                                        curso, diciplina, status, n1, n2, n3, n4, mediaTotal , nr, mediaRecuperacao)
                                                }

                                            })
                                        }


                                    })
                                })
                            })
                        })



                    })    // Fechamento diciplina
                }) // Fechamento curso              

            })// fechamento professor sexo 
        })//Fechamento professor nome 

    })// fechamento aluno sexo 
})//Fechamento aluno nome 