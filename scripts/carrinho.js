const tbody = document.querySelector("tbody");
var carrinho = JSON.parse(localStorage.getItem('carrinho'));
if (carrinho == null) {
    carrinho = [];
}else{
    exibirCarrinho();
}

function exibirCarrinho() {
    tbody.innerHTML = ""; // Limpa o conteúdo atual do tbody
    let total = 0; // Inicializa a variável total
    carrinho.forEach((produto, indice) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td><img src='${produto.imagem}'></td>
            <td>
                <button onclick='add(${indice})'>+</button>
                <input type='number' value='${produto.quantidade}' disabled=true>
                <button onclick='sub(${indice})'>-</button>
            </td>
            <td>${produto.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
        total += produto.total; // Adiciona o preço do produto ao total
    });
    const trTotal = document.createElement('tr');
    trTotal.innerHTML = `
        <td colspan="6">Total</td>
        <td>R$ ${total.toFixed(2)}</td>
    `;
    tbody.appendChild(trTotal);
    const trEnviar = document.createElement('tr');
    trEnviar.innerHTML = `
        <td colspan="7"><button onclick='enviarPedido()'>Enviar Pedido</button></td>
    `;
    tbody.appendChild(trEnviar);
}

function add(indice) {
    const produto = carrinho[indice];
    let frete = produto.frete * produto.peso * produto.preco;
    produto.quantidade += 1; // Incrementa a quantidade
    produto.total = (produto.preco + frete) * produto.quantidade; // Atualiza o total
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

function sub(indice) {
    const produto = carrinho[indice];
    let frete = produto.frete * produto.peso * produto.preco;
    produto.quantidade -= 1; // Incrementa a quantidade
    produto.total = (produto.preco + frete) * produto.quantidade; // Atualiza o total
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
    if(produto.quantidade == 0){
        carrinho.splice(indice, 1); // Remove o produto do carrinho
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
        exibirCarrinho(); // Atualiza a exibição do carrinho
    }
}

function enviarPedido() {
    window.localStorage.removeItem('carrinho'); // Remove o carrinho do localStorage
    window.location.href = 'home.html'; // Redireciona para a página inicial
}