/*****************************
 * Objetivo: Entrada de dados
 * Autor: Maxwillian
 * Data: 04/03/2026
 * **************************/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número inicial: ', (inicio) => {
  rl.question('Digite o número final: ', (fim) => {

    inicio = Number(inicio);
    fim = Number(fim);

    let numero = inicio;

    while (numero <= fim) {
      console.log(`\nTabuada do ${numero}`);

      let multiplicador = 1;

      while (multiplicador <= 10) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
        multiplicador++;
      }

      numero++;
    }

    rl.close();
  });
});