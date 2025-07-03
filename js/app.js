let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0];
    let valorUnitario = parseFloat(produto.split(' - R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value, 10);

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if(isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    let preco = valorUnitario * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario.toFixed(2).replace('.', ',')}</span>
        </section>`;

    totalGeral = totalGeral + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}