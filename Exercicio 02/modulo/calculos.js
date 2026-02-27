const calcularMedia = function(nota1, nota2, nota3){

    let = calcularMedia(nota1,nota2,nota3)
    
    if (media < 49){
        console.log("O aluno esta reprovado!!")
    }else if(media < 69){
        console.log("Digite a nota do exame do aluno:")
    }else if(media >=70){
        console.log ("Aluno Aprovado!!")
        return false
    }
}

const media = (nota1,nota2,nota3) => (Number(nota1))+(Number(nota2))+(Number(nota3))/3
 
module.exports={
    calcularMedia
}