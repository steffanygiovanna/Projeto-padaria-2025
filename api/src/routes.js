const express = require('express');
const routes = express.Router();

const Motorista = require('./controllers/motorista');
const Pedido = require('./controllers/pedido')

routes.post('/motoristas', Motorista.create);
routes.get('/motoristas', Motorista.read);
routes.get('/motoristas/:id', Motorista.readOne);
routes.put('/motoristas/:id', Motorista.update);
routes.delete('/motoristas/:id', Motorista.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Padaria Paladar Nobre' });
});

module.exports = routes;