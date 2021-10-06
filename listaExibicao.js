/*
Micro desafio - Passo 2
Importe o arquivo de consertos E faça as seguintes manipulações:
Liste e exiba somente os aparelhos com pronto marcado como true
Liste e exiba somene os aparelhos com pronto marcado como false
*/

const consertos = require('./consertos');
let listaProntoTrue = consertos.filter(item => item.pronto === true)
let listaProntoFalse = consertos.filter(item => item.pronto === true)

function listaPtrue() {

    console.log("> > > LISTA DE APARELHOS COM PRONTO MARCADO COMO TRUE: < < <");

    listaProntoTrue.forEach(item => {
        console.log(`Aparelho: ${item.aparelho}`);
        console.log(`Itens consertados: ${item.itensConsertados.map(item2 => item2)}`);
        console.log(`Valores: ${item.valores}`);
    });

    console.log("LISTA DE APARELHOS COM PRONTO MARCADO COMO FALSE: ");

    listaProntoFalse.forEach(item => {
        console.log(`Aparelho: ${item.aparelho}`);
        console.log(`Itens consertados: ${item.itensConsertados.map(item2 => item2)}`);
        console.log(`Valores: ${item.valores}`);
    });
}
listaPtrue();

/*
Micro desafio - Passo 3
Liste os aparelhos exibindo o modelo do aparelho juntamente dos itens
consertados e aplique uma soma nos valor dos consertos e exibir no console somente os
aparelhos que estão pronto marcado como true
*/
console.log("> > > LISTA DE APARELHOS MARCADOS COMO TRUE COM SOMA DE VALORES: < < <")
let listaProntotrueSoma = consertos.map(item => item.pronto === true ? `Aparelho: ${item.aparelho}, Itens consertados: ${item.itensConsertados.map(item2 => item2)} valor total : ${item.valores.reduce((a, b) => a + b)}` : '');
console.table(listaProntotrueSoma);