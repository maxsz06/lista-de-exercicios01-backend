const console = require("node:console");

const tratarInformacoes = function (dadosString) {

    dadosString = dadosString.trim();

    if (dadosString === "") {
        console.log('Preencha todos os campos');
        return false;
    } else if (!isNaN(Number(dadosString))) {
        console.log('Dados incorretos: não pode ser número');
        return false;
    } else {
        return dadosString
    }



}

const tratarSexoAluno = function (sexoRecebido) {

    let sexo
  
    if (sexoRecebido === '1') {
      sexo = 'Aluno'
  
    } else if (sexoRecebido === '2') {
     sexo = 'Aluna'
  
    } else {
      console.log('Opção inválida')
     // entradaDeDados.close()
      return null
    }

    return  sexo
  }

  const tratarSexoProf = function (sexoRecebido) {

    let sexo

    if (sexoRecebido === '1') {
      sexo = 'Professor'
  
    } else if (sexoRecebido === '2') {
     sexo = 'Professora'
  
    } else {
      console.log('Opção inválida')
     // entradaDeDados.close()
      return null
    }

    return  sexo
  }

const tratarNotas = function(valorRecebido){

    let nota = Number(valorRecebido.toString().replace(",", "."))

    
    if(nota <= 0){
        console.log('Apenas valores acima de 0')
            return false        
    }else if (nota>= 100.1){
        console.log('Apenas valores Abaixo de 100.1')
            return false
    }else{

        return nota.toFixed(2)

    }

}

module.exports = {
    tratarInformacoes,
    tratarSexoAluno,
    tratarSexoProf,
    tratarNotas
}

