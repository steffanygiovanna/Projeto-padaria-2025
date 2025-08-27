const tbody = document.querySelector("tbody");
var carrinho = JSON.parse(localStorage.getItem('carrinho'));
if (carrinho == null) {
    carrinho = [];
}else{
    exibirCarrinho();
}

function exibirCarrinho() {
    tbody.innerHTML = "";
    let total = 0;
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
        total += produto.total;
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
    produto.quantidade += 1;
    produto.total = (produto.preco + frete) * produto.quantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function sub(indice) {
    const produto = carrinho[indice];
    let frete = produto.frete * produto.peso * produto.preco;
    produto.quantidade -= 1;
    produto.total = (produto.preco + frete) * produto.quantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
    if(produto.quantidade == 0){
        carrinho.splice(indice, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        exibirCarrinho();
    }
}

function enviarPedido() {
    window.localStorage.removeItem('carrinho');
    window.location.href = 'home.html';
}
