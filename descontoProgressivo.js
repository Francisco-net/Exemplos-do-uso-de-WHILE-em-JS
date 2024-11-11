const rl = require('readline-sync');

let desconto = 0;

while(10>desconto){
    const produto = rl.question('Qual nome do produto : ', {limitMessage: 'Insira um valor valido'});
    desconto++
    console.log(`Sua porcentagem de desconto é igual a ${desconto}%`);
};
console.log('O desconto chegou a 10%');




