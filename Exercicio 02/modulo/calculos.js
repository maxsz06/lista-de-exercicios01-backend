

const calcularMedia = (n1,n2,n3,n4) => (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4

const calcularRecuperacao = (mediaTotal, nr) => (Number(mediaTotal)+Number(nr))/2
 
module.exports={
    calcularMedia,
    calcularRecuperacao
}

