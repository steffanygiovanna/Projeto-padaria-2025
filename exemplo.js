
const uri = "http://localhost:5000";
const dadosFront = "./assets/produtos.json"
var clientes = [];
var produtos = [];
var pedidos = [];

//Obter clientes da API
fetch(uri + "/clientes")
    .then(resp => resp.json())
    .then(dados => {
        clientes = dados;
    });

//Obter pedidos da API
fetch(uri + "/pedidos")
    .then(resp => resp.json())
    .then(dados => {
        pedidos = dados;
    });

//Obter título da API
fetch(uri)
    .then(resp => resp.json())
    .then(dados => {
        document.querySelector("header h1").textContent = dados.titulo;
        document.querySelector("title").textContent = dados.titulo;
    });

//Colocar a data de hoje no rodapé
document.querySelector("footer p").textContent = new Date().toLocaleDateString();

//Preencher o main com cards de produtos obtidos da pasta assets no próprio front-end
fetch(dadosFront)
    .then(resp => resp.json())
    .then(dados => {
        produtos = dados;
        const main = document.querySelector("main");
        dados.forEach(produto => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h2>${produto.produto}</h2>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p>${produto.descricao}</p>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="abrirModalPedido(${produto.id})">Comprar</button>
            `;
            main.appendChild(card);
        });
    });

//Preencher a tabela do Modal de listarClientes com os clientes obtidos da API
function preencherClientes() {
    const tbody = document.querySelector("#listarClientes tbody");
    tbody.innerHTML = "";
    clientes.forEach(cliente => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td data-label="Id">${cliente.id}</td>
            <td data-label="CPF" contenteditable=true>${cliente.cpf}</td>
            <td data-label="Nome" contenteditable=true>${cliente.nome}</td>
            <td data-label="Telefones">
                ${cliente.telefones.map(telefone => `${telefone.numero} (${telefone.tipo})<button onclick='removeTel(${telefone.id})'>-</button>`).join(", ")}
                <button onclick="novoInput(this, ${cliente.id})">+</button>
            </td>
            <td data-label="Ações">
                <button onclick="alteraCliente(this)">*</button>
                <button onclick="removeCliente(${cliente.id})">-</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

//Preencher a tabela do Modal de listarPedidos com os pedidos obtidos da API
function preencherPedidos() {
    const tbody = document.querySelector("#listarPedidos tbody");
    tbody.innerHTML = "";
    pedidos.forEach(pedido => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td data-label="Id">${pedido.id}</td>
            <td data-label="Cliente Id">${pedido.clienteId}</td>
            <td data-label="Data">${new Date(pedido.data).toLocaleDateString()}</td>
            <td data-label="Hora">${new Date(pedido.data).toLocaleTimeString()}</td>
            <td data-label="Produto">${pedido.produto}</td>
            <td data-label="Quantidade">${pedido.qtd}</td>
            <td data-label="Preço">${pedido.preco}</td>
            <td data-label="Subtotal">${pedido.subTotal}</td>
            <td data-label="Excluir"><button onclick="removePedido(${pedido.id})">-</button></td>
        `;
        tbody.appendChild(tr);
    });
}

//Imput para adicionar telefone ao cliente
function novoInput(elemento, clienteId) {
    const td = elemento.parentNode;
    const form = document.createElement("form");
    form.innerHTML = `
        <input type="text" name="telefone" placeholder="Telefone" required>
        <select name="tipo" required>
            <option value="celular">Celular</option>    
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial</option>
        </select>
        <button type="submit">Salvar</button>
    `;
    td.insertBefore(form, elemento);
    elemento.remove();
    form.addEventListener("submit", e => {
        e.preventDefault();
        const dados = {
            clienteId: Number(clienteId),
            numero: form.telefone.value,
            tipo: form.tipo.value
        };
        fetch(uri + "/telefones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        }).then(resp => resp.status)
            .then(status => {
                if (status == 201) {
                    alert("Telefone adicionado com sucesso!");
                } else {
                    alert("Erro ao adicionar telefone!");
                }
                window.location.reload();
            });
    });
}

//Enviar dados do cadastro de clientes para a API
const cadCli = document.querySelector("#novoCli form");
cadCli.addEventListener("submit", e => {
    e.preventDefault();
    const dados = {
        nome: cadCli.nome.value,
        cpf: cadCli.cpf.value != "" ? cadCli.cpf.value : null,
    };
    fetch(uri + "/clientes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }).then(resp => resp.status)
        .then(status => {
            if (status == 201) {
                alert("Cliente cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar cliente!");
            }
            window.location.reload();
        });

});

//Alterar dados do cliente
function alteraCliente(elemento) {
    const tr = elemento.parentNode.parentNode;
    const id = tr.children[0].textContent;
    const cpf = tr.children[1].textContent;
    const nome = tr.children[2].textContent;

    const dados = {
        nome: nome,
        cpf: cpf != "" ? cpf : null
    };

    fetch(uri + "/clientes/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }).then(resp => resp.status)
        .then(status => {
            if (status == 202) {
                alert("Cliente alterado com sucesso!");
            } else {
                alert("Erro ao alterar cliente!");
            }
            window.location.reload();
        });
}

//Excluir cliente
function removeCliente(id) {
    fetch(uri + "/clientes/" + id, {
        method: "DELETE"
    }).then(resp => resp.status)
        .then(status => {
            if (status == 204) {
                alert("Cliente removido com sucesso!");
            } else {
                alert("Erro ao remover cliente!");
            }
            window.location.reload();
        });
}

//Função para remover telefone do cliente
function removeTel(id) {
    fetch(uri + "/telefones/" + id, {
        method: "DELETE"
    }).then(resp => resp.status)
        .then(status => {
            if (status == 204) {
                alert("Telefone removido com sucesso!");
            } else {
                alert("Erro ao remover telefone!");
            }
            window.location.reload();
        });
}

//Modal de pedidos
function abrirModalPedido(id) {
    const produto = produtos.find(produto => produto.id == id);
    const body = document.querySelector("body");
    const modal = document.createElement("section");
    modal.id = "novoPedido";
    modal.className = "modal";
    const janela = document.createElement("div");
    janela.className = "janela";
    janela.innerHTML = `
            <div>
                <h2>Novo Pedido</h2>
                <button onclick="window.location.reload()">X</button>
            </div>
            <form>
                <label for="cliente">Cliente</label>
                <select name="cliente" required>
                    ${clientes.map(cliente => `<option value="${cliente.id}">${cliente.nome}</option>`).join("")}
                </select>
                <label for="produto">Produto</label>
                <input type="text" name="produto" value="${produto.produto}" disabled>
                <label for="preco">Preço</label>
                <input type="text" name="preco" value="${produto.preco}" disabled>
                <label for="qtd">Quantidade</label>
                <input type="number" name="qtd" value="1" required>
                <button type="submit">Salvar</button>   
            </form>
    `;
    modal.appendChild(janela);
    body.appendChild(modal);

    //Enviar dados do pedido para a API
    const cadPedido = document.querySelector("#novoPedido form");
    cadPedido.addEventListener("submit", e => {
        e.preventDefault();
        const dados = {
            clienteId: Number(cadPedido.cliente.value),
            produto: cadPedido.produto.value,
            preco: Number(cadPedido.preco.value),
            qtd: Number(cadPedido.qtd.value),
        };
        fetch(uri + "/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        }).then(resp => resp.status)
            .then(status => {
                if (status == 201) {
                    alert("Pedido cadastrado com sucesso!");
                } else {
                    alert("Erro ao cadastrar pedido!");
                }
                window.location.reload();
            });

    });
}

//Remove pedido
function removePedido(id) {
    fetch(uri + "/pedidos/" + id, {
        method: "DELETE"
    }).then(resp => resp.status)
        .then(status => {
            if (status == 204) {
                alert("Pedido removido com sucesso!");
            } else {
                alert("Erro ao remover pedido!");
            }
            window.location.reload();
        });
}