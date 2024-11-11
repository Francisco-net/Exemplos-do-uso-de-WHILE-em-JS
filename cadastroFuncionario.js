const rl = require('readline-sync');

let numFuncionario = 0;

while(4>=numFuncionario){
    const funcionario = rl.question('Qual nome do funcionario : ', {limitMessage: 'Insira um valor valido'});
    numFuncionario++;
};
console.log('O limite de  funcionários foi atingido. ');

