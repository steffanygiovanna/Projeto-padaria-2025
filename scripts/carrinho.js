// Abrir e fechar a aba lateral do carrinho
document.querySelector('.fa-cart-shopping').addEventListener('click', abrirCarrinho);

function abrirCarrinho() {
  const sidebar = document.getElementById("carrinhoSidebar");
  sidebar.classList.add("aberta");
  mostrarCarrinhoSidebar();
}

function fecharCarrinho() {
  const sidebar = document.getElementById("carrinhoSidebar");
  sidebar.classList.remove("aberta");
}

// Mostra os itens do carrinho na sidebar
function mostrarCarrinhoSidebar() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("carrinho-itens");
  const totalDiv = document.getElementById("carrinho-total");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalDiv.innerHTML = "";
    return;
  }

  let total = 0;

  carrinho.forEach(produto => {
    const subtotal = (produto.preco * produto.quantidade);
    total += subtotal;

    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <strong>${produto.nome}</strong><br>
      Quantidade: ${produto.quantidade}<br>
      Preço: R$ ${produto.preco.toFixed(2)}<br>
      Subtotal: R$ ${subtotal.toFixed(2)}
    `;
    container.appendChild(itemDiv);
  });

  totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

function mostrarCarrinhoSidebar() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("carrinho-itens");
  const totalDiv = document.getElementById("carrinho-total");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalDiv.innerHTML = "";
    return;
  }

  let total = 0;

  carrinho.forEach(produto => {
    const subtotal = (produto.preco * produto.quantidade);
    total += subtotal;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-carrinho");
    itemDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="item-info">
        <p><strong>${produto.nome}</strong></p>
        <p>Qtd: ${produto.quantidade}</p>
        <p>R$ ${produto.preco.toFixed(2)} cada</p>
        <p><em>Subtotal: R$ ${subtotal.toFixed(2)}</em></p>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

function mostrarCarrinhoSidebar() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("carrinho-itens");
  const totalDiv = document.getElementById("carrinho-total");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalDiv.innerHTML = "";
    return;
  }

  let total = 0;

  carrinho.forEach((produto, index) => {
    const subtotal = produto.preco * produto.quantidade;
    total += subtotal;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-carrinho");
    itemDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="item-info">
        <p><strong>${produto.nome}</strong></p>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        <div class="quantidade-controls">
          <button onclick="alterarQuantidade(${index}, -1)">−</button>
          <span>${produto.quantidade}</span>
          <button onclick="alterarQuantidade(${index}, 1)">+</button>
        </div>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

function alterarQuantidade(index, delta) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho[index].quantidade += delta;

  // Remover se quantidade for zero ou menos
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinhoSidebar();
}


// Botão finalizar
function finalizarPedido() {
  alert("Pedido finalizado com sucesso!");
  localStorage.removeItem("carrinho");
  fecharCarrinho();
}
