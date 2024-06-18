const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

function renderizarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    
    produtos.forEach(produto => {
        const itemProduto = document.createElement('li');
        itemProduto.classList.add('produto');
        
        const nomeProduto = document.createElement('span');
        nomeProduto.classList.add('produto-nome');
        nomeProduto.textContent = produto.nome;
        
        const valorProduto = document.createElement('span');
        valorProduto.classList.add('produto-valor');
        valorProduto.textContent = `R$ ${produto.valor.toFixed(2)}`;
        
        itemProduto.appendChild(nomeProduto);
        itemProduto.appendChild(valorProduto);
        
        listaProdutos.appendChild(itemProduto);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);
