const container = document.querySelector('.box-container');

// Exibe os produtos
cardapio.forEach(produto => {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
    <div class="icons">
      <a href="#" class="fas fa-shopping-cart btn-cart" data-id="${produto.id}"></a>
      <a href="#" class="fas fa-heart btn-fav" data-id="${produto.id}"></a>
      <a href="#" class="fas fa-eye btn-view" data-id="${produto.id}"></a>
    </div>
    <div class="image">
      <img src="${produto.imagem}" alt="${produto.nome}">
    </div>
    <div class="content">
      <h3>${produto.nome}</h3>
      <div class="stars">
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
      <div class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
    </div>`;
  container.appendChild(box);
});

// Ações dos botões
container.addEventListener('click', e => {
  const id = parseInt(e.target.dataset.id);
  if (e.target.classList.contains('btn-fav')) toggleFavorito(id);
  if (e.target.classList.contains('btn-cart')) adicionarCarrinho(id);
  if (e.target.classList.contains('btn-view')) abrirModal(id);
});

function toggleFavorito(id) {
  let favs = JSON.parse(localStorage.getItem('favs')) || [];
  favs = favs.includes(id) ? favs.filter(i => i !== id) : [...favs, id];
  localStorage.setItem('favs', JSON.stringify(favs));
}

function adicionarCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const produto = cardapio.find(p => p.id === id);
  const item = carrinho.find(p => p.id === id);
  item ? item.quantidade++ : carrinho.push({ id, nome: produto.nome, preco: produto.preco, imagem: produto.imagem, quantidade: 1 });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Adicionado ao carrinho!');
}

const modal = document.getElementById('itemModal');
const closeBtn = modal.querySelector('.close');

function abrirModal(id) {
  const produto = cardapio.find(p => p.id === id);
  document.getElementById('modal-img').src = produto.imagem;
  document.getElementById('modal-nome').textContent = produto.nome;
  document.getElementById('modal-desc').textContent = produto.descricao;
  document.getElementById('modal-preco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
  const avaliacoes = Array.from({ length: 5 }).map(() => Math.random() * 4 + 1); // Simula
  const media = (avaliacoes.reduce((a,b)=>a+b,0)/avaliacoes.length).toFixed(1);
  document.getElementById('modal-avaliacao').textContent = `Média de avaliação: ${media} / 5`;
  modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => e.target === modal && (modal.style.display = 'none');
