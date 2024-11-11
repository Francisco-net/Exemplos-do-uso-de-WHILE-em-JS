const rl = require('readline-sync');

let qtdNotas = 0;
let numEstudante = 0;

while(29>=qtdNotas){
    numEstudante++;
    const nota = rl.questionFloat(`Estudante de numero ${numEstudante}. Insira a nota do estudante: `, {limitMessage: 'Insira um valor valido'});
    qtdNotas++;
};
console.log('Todas as notas foram computadas.');



