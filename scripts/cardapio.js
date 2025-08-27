const cardapio = [
  {
    "id": 1,
    "nome": "Pão Francês",
    "descricao": "Pão crocante por fora e macio por dentro, ideal para o café da manhã.",
    "preco": 0.80,
    "peso": 0.05,
    "imagem": "../docs/Imagem/Pão.jpg"
  },
  {
    "id": 2,
    "nome": "Pão de Forma Artesanal",
    "descricao": "Feito com ingredientes selecionados, perfeito para sanduíches.",
    "preco": 7.00,
    "peso": 0.4,
    "imagem": "../docs/Imagem/pao de forma artesanal.jpg"
  },
  {
    "id": 3,
    "nome": "Pão Integral",
    "descricao": "Pão saudável com farinha de centeio e grãos, ideal para dietas balanceadas.",
    "preco": 8.00,
    "peso": 0.4,
    "imagem": "../docs/Imagem/pao de centeio.jpg"
  },
  {
    "id": 4,
    "nome": "Pão de Milho",
    "descricao": "Pão macio com sabor leve de milho, ótimo para lanches.",
    "preco": 7.50,
    "peso": 0.3,
    "imagem": "../docs/Imagem/pao de milho.jpg"
  },
  {
    "id": 5,
    "nome": "Pão de Leite",
    "descricao": "Pão fofinho e levemente adocicado, ideal para o lanche da tarde.",
    "preco": 6.00,
    "peso": 0.3,
    "imagem": "../docs/Imagem/pao de leite.jpg"
  },
  {
    "id": 6,
    "nome": "Pão de Calabresa com Queijo",
    "descricao": "Pão recheado com calabresa e queijo, sabor marcante e irresistível.",
    "preco": 9.00,
    "peso": 0.35,
    "imagem": "../docs/Imagem/Pão de Calabresa com Queijo.jpeg"
  },
  {
    "id": 7,
    "nome": "Pão de Alho Assado",
    "descricao": "Clássico pão de alho assado, crocante e saboroso.",
    "preco": 3.50,
    "peso": 0.12,
    "imagem": "../docs/Imagem/Pão de Alho Assado.jpg"
  },
  {
    "id": 8,
    "nome": "Esfirra de Carne",
    "descricao": "Esfirra macia e recheada com carne temperada no ponto certo.",
    "preco": 6.00,
    "peso": 0.15,
    "imagem": "../docs/Imagem/Esfirra de Carne.jpg"
  },
  {
    "id": 9,
    "nome": "Enrolado de Salsicha",
    "descricao": "Salsicha envolta em massa macia, também conhecido como doguinho.",
    "preco": 5.50,
    "peso": 0.13,
    "imagem": "../docs/Imagem/Enrolado de Salsicha (Doguinho).jpg"
  },
  {
    "id": 10,
    "nome": "Croissant de Presunto e Queijo",
    "descricao": "Croissant folhado recheado com presunto e queijo derretido.",
    "preco": 7.00,
    "peso": 0.14,
    "imagem": "../docs/Imagem/Croissant de Presunto e Queijo.jpg"
  },
  {
    "id": 11,
    "nome": "Pastel de Forno (Carne ou Frango)",
    "descricao": "Pastel assado com recheio saboroso de carne ou frango.",
    "preco": 6.50,
    "peso": 0.15,
    "imagem": "../docs/Imagem/Pastel de Forno.jpg"
  },
  {
    "id": 12,
    "nome": "Empada de Frango",
    "descricao": "Empada tradicional recheada com frango desfiado e temperado.",
    "preco": 5.00,
    "peso": 0.12,
    "imagem": "../docs/Imagem/Empada de Frango.png"
  },
  {
    "id": 13,
    "nome": "Mini Pizza de Calabresa",
    "descricao": "Massa macia com molho, queijo e calabresa fatiada.",
    "preco": 7.00,
    "peso": 0.2,
    "imagem": "../docs/Imagem/Mini Pizza de Calabresa.jpg"
  },
  {
    "id": 14,
    "nome": "Torta Salgada de Frango",
    "descricao": "Fatia de torta caseira recheada com frango cremoso.",
    "preco": 6.50,
    "peso": 0.18,
    "imagem": "../docs/Imagem/Torta Salgada de Frango.jpg"
  },
  {
    "id": 15,
    "nome": "Misto Quente Artesanal",
    "descricao": "Pão artesanal com presunto e queijo derretido na chapa.",
    "preco": 8.00,
    "peso": 0.25,
    "imagem": "../docs/Imagem/Misto Quente Artesanal.jpeg"
  },
  {
    "id": 16,
    "nome": "Café (200ml)",
    "descricao": "Café coado tradicional, quente e encorpado.",
    "preco": 3.00,
    "peso": 0.2,
    "imagem": "../docs/Imagem/Café.jpg"
  },
  {
    "id": 17,
    "nome": "Café Expresso (50ml)",
    "descricao": "Café expresso intenso, extraído na hora.",
    "preco": 4.00,
    "peso": 0.05,
    "imagem": "../docs/Imagem/Café Expresso.jpg"
  },
  {
    "id": 18,
    "nome": "Cappuccino Cremoso (200ml)",
    "descricao": "Bebida cremosa com café, leite e chocolate.",
    "preco": 6.00,
    "peso": 0.2,
    "imagem": "../docs/Imagem/Cappuccino Cremoso.jpg"
  },
  {
    "id": 19,
    "nome": "Suco Natural (300ml)",
    "descricao": "Suco natural da fruta, sem conservantes.",
    "preco": 5.00,
    "peso": 0.3,
    "imagem": "../docs/Imagem/Suco Natural.jpg"
  },
  {
    "id": 20,
    "nome": "Chá Quente (200ml)",
    "descricao": "Chá quente, ideal para relaxar a qualquer hora.",
    "preco": 3.50,
    "peso": 0.2,
    "imagem": "../docs/Imagem/Chá Quente.jpg"
  },
  {
    "id": 21,
    "nome": "Bala Halls",
    "descricao": "Bala refrescante para hálito puro e fresco.",
    "preco": 2.50,
    "peso": 0.03,
    "imagem": "../docs/Imagem/Bala Halls.jpg"
  },
  {
    "id": 22,
    "nome": "Trident",
    "descricao": "Goma de mascar com sabores variados e refrescantes.",
    "preco": 2.50,
    "peso": 0.02,
    "imagem": "../docs/Imagem/Trident.jpg"
  },
  {
    "id": 23,
    "nome": "Bala de Iogurte",
    "descricao": "Bala macia com sabor suave de iogurte.",
    "preco": 0.50,
    "peso": 0.01,
    "imagem": "../docs/Imagem/Bala de Iogurte.jpg"
  },
  {
    "id": 24,
    "nome": "Mentos",
    "descricao": "Pastilha mastigável com sabores frutados ou menta.",
    "preco": 3.00,
    "peso": 0.03,
    "imagem": "../docs/Imagem/Mentos.jpg"
  },
  {
    "id": 25,
    "nome": "Tic Tac",
    "descricao": "Balas refrescantes em embalagem prática.",
    "preco": 3.00,
    "peso": 0.03,
    "imagem": "../docs/Imagem/Tic Tac.jpeg"
  }
];
