const jsonwebtoken = require("jsonwebtoken");
const Middlewares = require('../middlewares/auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const { email, senha, validade } = req.body;

    try {
        // Busca o cliente pelo email
        const cliente = await prisma.cliente.findFirst({
            where: { email }
        });

        if (!cliente) {
            return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
        }

        

        // Valida a senha
        const isValidPassword = await Middlewares.validatePassword(senha, cliente.senha);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
        }

        // Gera o token JWT
        const token = jsonwebtoken.sign(
            {
                id: cliente.cliente_id,
                nome: cliente.nome,
                email: cliente.email,
            },
            process.env.SECRET_JWT,
            { expiresIn: validade ? `${validade}min` : "60min" }
        );

        res.status(200).json({ token });
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const validaToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." });
    }

    jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido ou expirado." });
        }
        req.user = decoded;
        res.status(200).json({ message: req.user });
    });
};

module.exports = {
    login,
    validaToken
};
