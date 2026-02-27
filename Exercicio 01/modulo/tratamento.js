
const tratamentoDeDados = function (numero) {

    let setNumero = numero.replace(",", ".")

    if (setNumero === '') {
        console.log('Preencha os Campos!')
        return false
    } else if (isNaN(setNumero)) {
        console.log('Opção Invalida: Apenas Numeros')
        return false
    } else {

        return Number(setNumero).toFixed(2)
    }

}

module.exports = {

    tratamentoDeDados
}