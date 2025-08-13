const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/itemPedido');
const Funcionario = require('./controllers/funcionario');
const Estoque = require('./controllers/movimentoEstoque');
const Produto = require('./controllers/produto');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Padaria Paladar Nobre' });
});

routes.post('/api/clientes', Cliente.create);
routes.get('/api/clientes', Cliente.read);
routes.get('/api/clientes/:id', Cliente.readOne);
routes.put('/api/clientes/:id', Cliente.update);
routes.delete('/api/clientes/:id', Cliente.remove);

routes.post('/api/pedidos', Pedido.create);
routes.get('/api/pedidos', Pedido.read);
routes.get('/api/pedidos/:id', Pedido.readOne);
routes.put('/api/pedidos/:id', Pedido.update);
routes.delete('/api/pedidos/:id', Pedido.remove);

routes.post('/api/item', Item.create);
routes.get('/api/item', Item.read);
routes.get('/api/item/:id', Item.readOne);
routes.put('/api/item/:id', Item.update);
routes.delete('/api/item/:id', Item.remove);

routes.post('/api/funcionarios', Funcionario.create);
routes.get('/api/funcionarios', Funcionario.read);
routes.get('/api/funcionarios/:id', Funcionario.readOne);
routes.put('/api/funcionarios/:id', Funcionario.update);
routes.delete('/api/funcionarios/:id', Funcionario.remove);

routes.post('/api/estoque', Estoque.create);
routes.get('/api/estoque', Estoque.read);
routes.get('/api/estoque/:id', Estoque.readOne);
routes.put('/api/estoque/:id', Estoque.update);
routes.delete('/api/estoque/:id', Estoque.remove);

routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos', Produto.read);
routes.get('/api/produtos/:id', Produto.readOne);
routes.put('/api/produtos/:id', Produto.update);
routes.delete('/api/produtos/:id', Produto.remove);


module.exports = routes;