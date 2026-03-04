const relatorioAprovado = function(alunoDef,sexoAlDef,professorDef,sexoProfDef,
    curso,diciplina,status,n1,n2,n3,n4, mediaTotal){

    console.log()
    console.log(sexoAlDef+' ' +alunoDef +' foi ' + status + ' na diciplina de: ' + diciplina)
    console.log('Curso:'+ curso)
    console.log(sexoProfDef+':'+''+professorDef)
    console.log('Notas do aluno:'+ n1+'|'+n2+'|'+n3+'|'+n4)
    console.log('Média Final:'+ mediaTotal)


}

const relatorioReprovado = function(alunoDef,sexoAlDef,professorDef,sexoProfDef,
    curso,diciplina,status,n1,n2,n3,n4, mediaTotal){

    console.log()
    console.log(sexoAlDef+' ' +alunoDef +' foi ' + status + ' na diciplina de: ' + diciplina)
    console.log('Curso:'+ curso)
    console.log(sexoProfDef+':'+''+professorDef)
    console.log('Notas do aluno:'+ n1+'|'+n2+'|'+n3+'|'+n4)
    console.log('Média Final:'+ mediaTotal)


}

const relatorioRecuperacao = function(alunoDef,sexoAlDef,professorDef,sexoProfDef,
    curso,diciplina,status,n1,n2,n3,n4, mediaTotal,nr,mediaRecuperacao){

    console.log()
    console.log(sexoAlDef+' ' +alunoDef +' foi ' + status + ' na diciplina de: ' + diciplina)
    console.log('Curso:'+ curso)
    console.log(sexoProfDef+':'+''+professorDef)
    console.log('Notas do aluno:'+ n1+'|'+n2+'|'+n3+'|'+n4)
    console.log('Media: '+ mediaTotal)
    console.log('Nota na Recuperacao: ' + nr)
    console.log('Média Final:'+ mediaRecuperacao)


}



module.exports={
    relatorioAprovado,
    relatorioReprovado,
    relatorioRecuperacao
    
}