const produtos = [
    { nome: "Produto A", estoque: 0 },
    { nome: "Produto B", estoque: 5 },
    { nome: "Produto C", estoque: 4 },
    { nome: "Produto D", estoque: 8 }
  ];

console.log(produtos[0].estoque);


let i = 0;

while (i < produtos.length && produtos[i].estoque !== 0) {
    console.log(`Produto: ${produtos[i].nome}, Estoque: ${produtos[i].estoque}`);
    i++;
};
  
console.log("Processo finalizado. Produto com estoque 0 encontrado ou fim da lista.");