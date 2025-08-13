function criarSidebarCarrinho() {
    if (document.getElementById('sidebar-carrinho')) return;

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar-carrinho';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h2>Seu Carrinho</h2>
            <button id="fechar-sidebar">&times;</button>
        </div>
        <div id="sidebar-itens"></div>
        <div class="sidebar-footer">
            <span id="sidebar-total"></span>
            <button id="finalizar-compra">Finalizar Compra</button>
        </div>
    `;
    document.body.appendChild(sidebar);

    const styleSidebar = document.createElement('style');
    styleSidebar.textContent = `
        #sidebar-carrinho {
            position: fixed;
            top: 0; right: 0;
            width: 350px;
            height: 100%;
            background: #fff;
            box-shadow: -2px 0 10px rgba(0,0,0,0.2);
            z-index: 2000;
            transform: translateX(100%);
            transition: transform 0.3s;
            display: flex;
            flex-direction: column;
        }
        #sidebar-carrinho.aberto {
            transform: translateX(0);
        }
        .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 20px 10px 20px;
            border-bottom: 1px solid #eee;
        }
        .sidebar-header h2 {
            font-size: 1.3rem;
            margin: 0;
        }
        #fechar-sidebar {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
        }
        #sidebar-itens {
            flex: 1;
            overflow-y: auto;
            padding: 15px 20px;
        }
        .sidebar-item {
            display: flex;
            align-items: center;
            margin-bottom: 18px;
            border-bottom: 1px solid #f2f2f2;
            padding-bottom: 10px;
        }
        .sidebar-item img {
            width: 55px; height: 55px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 12px;
        }
        .sidebar-item-info {
            flex: 1;
        }
        .sidebar-item-nome {
            font-weight: 600;
            margin-bottom: 2px;
        }
        .sidebar-item-preco {
            color: #888;
            font-size: 0.95em;
        }
        .sidebar-item-quantidade {
            display: flex;
            align-items: center;
            margin-top: 5px;
        }
        .sidebar-item-quantidade button {
            background: #eee;
            border: none;
            width: 24px; height: 24px;
            font-size: 1.1em;
            cursor: pointer;
            margin: 0 4px;
            border-radius: 4px;
        }
        .sidebar-item-remover {
            color: #e74c3c;
            background: none;
            border: none;
            font-size: 1.2em;
            cursor: pointer;
            margin-left: 8px;
        }
        .sidebar-footer {
            padding: 18px 20px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #sidebar-total {
            font-weight: bold;
            font-size: 1.1em;
        }
        #finalizar-compra {
            background: #4CAF50;
            color: #fff;
            border: none;
            padding: 8px 18px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
        }
        @media (max-width: 500px) {
            #sidebar-carrinho { width: 100vw; }
        }
    `;
    document.head.appendChild(styleSidebar);

    document.getElementById('fechar-sidebar').onclick = fecharSidebarCarrinho;
    document.getElementById('finalizar-compra').onclick = () => {
        alert('Compra finalizada! (simulação)');
        localStorage.removeItem('carrinho');
        atualizarSidebarCarrinho();
        atualizarContadorCarrinho();
        fecharSidebarCarrinho();
    };
}

function abrirSidebarCarrinho() {
    criarSidebarCarrinho();
    atualizarSidebarCarrinho();
    document.getElementById('sidebar-carrinho').classList.add('aberto');
}

function fecharSidebarCarrinho() {
    const sidebar = document.getElementById('sidebar-carrinho');
    if (sidebar) sidebar.classList.remove('aberto');
}

function atualizarSidebarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const sidebarItens = document.getElementById('sidebar-itens');
    const sidebarTotal = document.getElementById('sidebar-total');
    if (!sidebarItens || !sidebarTotal) return;

    sidebarItens.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        sidebarItens.innerHTML = '<p>Seu carrinho está vazio.</p>';
        sidebarTotal.textContent = '';
        return;
    }

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        const div = document.createElement('div');
        div.className = 'sidebar-item';
        div.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="sidebar-item-info">
                <div class="sidebar-item-nome">${item.nome}</div>
                <div class="sidebar-item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                <div class="sidebar-item-quantidade">
                    <button class="btn-menos" data-id="${item.id}">-</button>
                    <span>${item.quantidade}</span>
                    <button class="btn-mais" data-id="${item.id}">+</button>
                    <button class="sidebar-item-remover" data-id="${item.id}" title="Remover">&times;</button>
                </div>
            </div>
        `;
        sidebarItens.appendChild(div);
    });

    sidebarTotal.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

    sidebarItens.querySelectorAll('.btn-menos').forEach(btn => {
        btn.onclick = () => alterarQuantidadeCarrinho(Number(btn.dataset.id), -1);
    });
    sidebarItens.querySelectorAll('.btn-mais').forEach(btn => {
        btn.onclick = () => alterarQuantidadeCarrinho(Number(btn.dataset.id), 1);
    });
    sidebarItens.querySelectorAll('.sidebar-item-remover').forEach(btn => {
        btn.onclick = () => removerItemCarrinho(Number(btn.dataset.id));
    });
}

function alterarQuantidadeCarrinho(id, delta) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = carrinho.find(i => i.id === id);
    if (!item) return;
    item.quantidade += delta;
    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(i => i.id !== id);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarSidebarCarrinho();
    atualizarContadorCarrinho();
}

function removerItemCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(i => i.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarSidebarCarrinho();
    atualizarContadorCarrinho();
}

const produtos = [
    { nome: "Pão Frances", preco: 0.80, imagem: "../docs/Imagem/Pão.jpg" },
    { nome: "Pão de Forma Artesanal", preco: 7.00, imagem: "../docs/Imagem/pao de forma artesanal.jpg" },
    { nome: "Pão Integral", preco: 8.00, imagem: "../docs/Imagem/pao de centeio.jpg" },
    { nome: "Pão de Milho", preco: 7.50, imagem: "../docs/Imagem/pao de milho.jpg" },
    { nome: "Pão de Leite", preco: 6.00, imagem: "../docs/Imagem/pao de leite.jpg" },
    { nome: "Pão de Calabresa com Queijo", preco: 9.00, imagem: "../docs/Imagem/Pão de Calabresa com Queijo.jpeg" },
    { nome: "Pão de Alho Assado", preco: 3.50, imagem: "../docs/Imagem/Pão de Alho Assado.jpg" },
    { nome: "Esfirra de Carne", preco: 6.00, imagem: "../docs/Imagem/Esfirra de Carne.jpg" },
    { nome: "Enrolado de Salsicha", preco: 5.50, imagem: "../docs/Imagem/Enrolado de Salsicha (Doguinho).jpg" },
    { nome: "Croissant de Presunto e Queijo", preco: 7.00, imagem: "../docs/Imagem/Croissant de Presunto e Queijo.jpg" },
    { nome: "Pastel de Forno (Carne Ou Frango)", preco: 6.50, imagem: "../docs/Imagem/Pastel de Forno.jpg" },
    { nome: "Empada de Frango", preco: 5.00, imagem: "../docs/Imagem/Empada de Frango.png" },
    { nome: "Mini Pizza de Calabresa", preco: 7.00, imagem: "../docs/Imagem/Mini Pizza de Calabresa.jpg" },
    { nome: "Torta Salgada de Frango", preco: 6.50, imagem: "../docs/Imagem/Torta Salgada de Frango.jpg" },
    { nome: "Misto Quente Artesanal", preco: 8.00, imagem: "../docs/Imagem/Misto Quente Artesanal.jpeg" },
    { nome: "Café(200ml)", preco: 3.00, imagem: "../docs/Imagem/Café.jpg" },
    { nome: "Café Expresso(50ml)", preco: 4.00, imagem: "../docs/Imagem/Café Expresso.jpg" },
    { nome: "Cappuccino Cremoso (200ml)", preco: 6.00, imagem: "../docs/Imagem/Cappuccino Cremoso.jpg" },
    { nome: "Suco Natural(300ml)", preco: 5.00, imagem: "../docs/Imagem/Suco Natural.jpg" },
    { nome: "Chá Quente(200ml)", preco: 3.50, imagem: "../docs/Imagem/Chá Quente.jpg" },
    { nome: "Bala Halls", preco: 2.50, imagem: "../docs/Imagem/Bala Halls.jpg" },
    { nome: "Trident", preco: 2.50, imagem: "../docs/Imagem/Trident.jpg" },
    { nome: "Bala de Iogurte", preco: 0.50, imagem: "../docs/Imagem/Bala de Iogurte.jpg" },
    { nome: "Mentos", preco: 3.00, imagem: "../docs/Imagem/Mentos.jpg" },
    { nome: "Tic Tac", preco: 3.00, imagem: "../docs/Imagem/Tic Tac.jpeg" }
];

function adicionarAoCarrinho(index) {
    const produto = produtos[index];
    if (!produto) return;

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const existente = carrinho.find(item => item.nome === produto.nome);

    if (existente) {
        existente.quantidade += 1;
    } else {
        carrinho.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    if (typeof atualizarSidebarCarrinho === "function") atualizarSidebarCarrinho();
    if (typeof atualizarContadorCarrinho === "function") atualizarContadorCarrinho();
}

document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.fa-cart-shopping');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            abrirSidebarCarrinho();
        });
    }

    const addToCartButtons = document.querySelectorAll('.fa-shopping-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            adicionarAoCarrinho(index);
        });
    });
});
