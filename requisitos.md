## Requisitos Funcionais

### [RF001] Criar Cliente  
Cadastro com nome, CPF, telefone e endereço.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

### [RF002] Consultar Cliente  
Busca por nome, CPF ou telefone.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

### [RF003] Atualizar Cliente  
Edição de dados cadastrais.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Funcionário, Gerente

### [RF004] Excluir Cliente  
Excluir cliente sem pedidos associados.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

---

## Entidade: Funcionário

### [RF005] Criar Funcionário  
Cadastro com nome, CPF, cargo e turno.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Gerente

### [RF006] Consultar Funcionário  
Busca por nome ou cargo.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Gerente

### [RF007] Atualizar Funcionário  
Alterar dados.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

### [RF008] Excluir Funcionário  
Somente se não vinculado a pedidos.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

---

## Entidade: Fornecedor

### [RF009] Criar Fornecedor  
Razão social, CNPJ, contato.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Gerente

### [RF010] Consultar Fornecedor  
Busca por nome ou CNPJ.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Gerente

### [RF011] Atualizar Fornecedor  
Editar dados.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

### [RF012] Excluir Fornecedor  
Sem produtos vinculados.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

---

## Entidade: Produto

### [RF013] Criar Produto  
Nome, descrição, preço, estoque e fornecedor.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

### [RF014] Consultar Produto  
Busca por nome ou categoria.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente, Cliente (apenas visualização)

### [RF015] Atualizar Produto  
Editar dados.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Gerente

### [RF016] Excluir Produto  
Sem relação com pedidos ou estoque.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Gerente

---

## Entidade: Movimento de Estoque

### [RF017] Registrar Entrada de Estoque  
Movimentação por compra de fornecedor.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

### [RF018] Registrar Saída de Estoque  
Baixa de produto por venda.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Sistema (automático), Gerente

### [RF019] Consultar Movimentos  
Histórico com filtro por produto e data.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Gerente

---

## Entidade: Pedido

### [RF020] Criar Pedido  
Cadastro com cliente, funcionário, data, forma de pagamento.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário, Cliente (autoatendimento)

### [RF021] Consultar Pedido  
Visualizar pedidos feitos, com itens e valores.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Cliente, Funcionário, Gerente

### [RF022] Cancelar Pedido  
Com devolução de estoque.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

---

## Entidade: Item do Pedido

### [RF023] Adicionar Itens ao Pedido  
Produto, quantidade e preço.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário

### [RF024] Remover Item do Pedido  
Antes da finalização.  
*Prioridade*: [ ] Essencial [ ] Importante [x] Desejável  
*Perfil*: Funcionário

---

## Entidade: Entrega

### [RF025] Registrar Entrega  
Vincular pedido, data prevista, status e endereço.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente

### [RF026] Atualizar Status de Entrega  
De "pendente" para "em rota", "entregue", etc.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Funcionário

### [RF027] Consultar Entregas  
Filtrar por data, status, cliente.  
*Prioridade*: [ ] Essencial [x] Importante [ ] Desejável  
*Perfil*: Funcionário, Gerente, Cliente (apenas os próprios)

---

## Acesso ao Sistema

### [RF028] Login e Autenticação  
Usuário e senha por perfil.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável  
*Perfil*: Todos

### [RF029] Perfis e Permissões  
- Cliente: acesso a produtos, pedidos e entregas próprios.  
- Funcionário: gestão de clientes, pedidos, produtos, entregas.  
- Gerente: acesso total, inclusive gestão de funcionários e fornecedores.  
*Prioridade*: [x] Essencial [ ] Importante [ ] Desejável


### Requisito não funcional

- [RN001] Linguagem de programação TypeScript  
- [RN002] Framework de back-end Express.js  
- [RN003] ORM Prisma  
- [RN004] IDE de desenvolvimento WebStorm  
- [RN005] IDE de testes Insomnia  
- [RN006] Banco de dados PostgreSQL  
- [RN007] Autenticação com OAuth 2.0 (login com Google)  
- [RN008] Armazenamento em nuvem AWS S3 para imagens dos produtos  
- [RN009] Logs e monitoramento com LogRocket  
- [RN010] Hospedagem no Heroku  
- [RN011] Interface criada com Vue.js  
- [RN012] Tempo de resposta do servidor inferior a 300ms  
- [RN013] Interface com acessibilidade (contraste, leitura por teclado, etc.)