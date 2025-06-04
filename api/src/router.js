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

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.post('/item', Item.create);
routes.get('/item', Item.read);
routes.get('/item/:id', Item.readOne);
routes.put('/item/:id', Item.update);
routes.delete('/item/:id', Item.remove);

routes.post('/funcionarios', Funcionario.create);
routes.get('/funcionarios', Funcionario.read);
routes.get('/funcionarios/:id', Funcionario.readOne);
routes.put('/funcionarios/:id', Funcionario.update);
routes.delete('/funcionarios/:id', Funcionario.remove);

routes.post('/estoque', Estoque.create);
routes.get('/estoque', Estoque.read);
routes.get('/estoque/:id', Estoque.readOne);
routes.put('/estoque/:id', Estoque.update);
routes.delete('/estoque/:id', Estoque.remove);

routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);
routes.get('/produtos/:id', Produto.readOne);
routes.put('/produtos/:id', Produto.update);
routes.delete('/produtos/:id', Produto.remove);


module.exports = routes;