const calcularTabuadaCompleta = function (tInic,tFim,scInic,scFim) {


    for (let i = tInic; i <= tFim; i++) {
        console.log(`\nTabuada do [${i}]`)

        for (let j = scInic; j <= scFim; j++) {
            console.log(`${i}x ${j} = ${i * j}`)
        }
    }

}

module.exports = {

    calcularTabuadaCompleta
}