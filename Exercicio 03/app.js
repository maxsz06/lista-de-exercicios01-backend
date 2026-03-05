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

function iniciarSistema() {
    console.log("--- Sistema de Gerenciamento de Tabuada ---");

    rl.question("Digite a tabuada inicial (2-100): ", (tInic) => {
        rl.question("Digite a tabuada final (2-100): ", (tFim) => {
            rl.question("Digite o contador inicial(1-50): ", (cInic) => {
                rl.question("Digite o contador final (1-50): ", (cFim) => {

                    // 1. Validação de preenchimento
                    if (!tInic || !tFim || !cInic || !cFim) {
                        console.error("\nERRO: Nenhuma entrada de dados poderá ficar sem preenchimento.");
                        rl.close();
                        return;
                    }

                    const tabInicial = Number(tInic); // i 
                    const tabFinal = Number(tFim);
                    const contInicial = Number(cInic);
                    const contFinal = Number(cFim);

                    // 2. Validação dos intervalos da tabuada (2 a 100)
                    if (tabInicial < 2 || tabInicial > 100 || tabFinal < 2 || tabFinal > 100) {
                        console.error("\nERRO: A entrada da tabuada deverá ser entre 2 e 100.");
                        rl.close();
                        return;
                    }

                    // 3. Validação do valor final do contador (1 a 50)
                    if (contFinal < 1 || contFinal > 50) {
                        console.error("\nERRO: O valor até onde será calculada a tabuada deverá ser entre 1 e 50.");
                        rl.close();
                        return;
                    }

                    // 4. Geração das Tabuadas
                    for (let i = tabInicial; i <= tabFinal; i++) {
                        console.log(`\nTabuada do [${i}]`);
                        
                        for (let j = contInicial; j <= contFinal; j++) {
                            console.log(`${i} x ${j} = ${i * j}`);
                        }
                    }

                    rl.close();
                });
            });
        });
    });
}

iniciarSistema();