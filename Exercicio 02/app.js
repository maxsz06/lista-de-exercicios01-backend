/*****************************
 * Objetivo: Entrada de dados
 * Autor: Maxwillian
 * Data: 27/02/2026
 * **************************/
let tratarDados = require('./modulo/tratamento.js')

const readLine = require('readline')
const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o nome do aluno:', function (setAluno) {
    let aluno = setAluno
    entradaDeDados.question('Digite o Nome do professor: ', function (setProfessor) {
        let professor = setProfessor
        entradaDeDados.question('Digite o Sexo do Aluno:', function (setSexoAluno) {
            let sexoAluno = setSexoAluno
            entradaDeDados.question('Digite o Sexo do Professor: ', function (setSexoProfessor) {
                let sexoProfessor = setSexoProfessor
                entradaDeDados.question('Nome do Curso', function (setCurso) {
                    let curso = setCurso
                    entradaDeDados.question('Nome da Diciplina:', function (setDiciplina) {
                        let diciplina = setDiciplina

                        /*let nomeAluno = tratarDados.tratarInformacoes(setAluno)
                         let nomeProfessor = tratarDados.tratarInformacoes(setProfessor)
                         let alunoSexo = tratarDados.tratarInformacoes(setSexoAluno)
                         let professorSexo = tratarDados.tratarInformacoes(setSexoProfessor)
                         let cursoAtual = tratarDados.tratarInformacoes(setCurso)
                         let diciplinaAtual = tratarDados.tratarInformacoes(setDiciplina)*/

                        let tratarDadosString = tratarDados.tratarInformacoes(setAluno, setProfessor, setProfessor, setAluno, setSexoAluno,
                            setSexoProfessor, setCurso, setProfessor)



                        entradaDeDados.question('Digite nota 1: ', function (setNota1) {
                            let n1 = setNota1
                            entradaDeDados.question('Digite nota 2: ', function (setNota2) {
                                let n2 = setNota2
                                entradaDeDados.question('Digite nota 3:', function (setNota3) {
                                    let n3 = setNota3
                                    
                                }) // fechamento nota 3
                            })// fechamento nota 2
                        }) // fechamento nota1

                    }) // fechamento 6
                })// Fechamento 5
            }) //Fechamento 4
        }) // Fechamento 3
    })//Fechamento 2
})//Fechamento 1