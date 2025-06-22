const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./src/router');

app.use(cors());
app.use(express.json());
app.use(router);

app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Preencha todos os campos: nome, email e senha." });
    }

    try {
        const clienteExistente = await prisma.cliente.findUnique({
            where: { email: email }
        });

        if (clienteExistente) {
            return res.status(400).json({ message: 'Email já cadastrado!' });
        }

        const novoCliente = await prisma.cliente.create({
            data: {
                nome,
                email,
                senha
            }
        });

        res.status(201).json({
            message: 'Cliente cadastrado com sucesso!',
            cliente: novoCliente
        });

    } catch (error) {
        console.error("Erro no cadastro:", error);
        res.status(500).json({
            message: 'Erro ao cadastrar cliente',
            erro: error.message
        });
    }
});

app.listen(5000, () => {
    console.log('API respondendo em http://localhost:5000');
});