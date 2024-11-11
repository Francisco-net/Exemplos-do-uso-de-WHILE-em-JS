const rl = require('readline-sync');

const meta = 10000.00
let vendaDiaria = 0;

while (vendaDiaria <= meta) {
    const valor = rl.questionFloat('Valor da sua venda: ', {limitMessage: 'Insira um valor valido'});
    vendaDiaria+=valor;
};
console.log('Seu caixa chegou a meta de R$10000,00');

