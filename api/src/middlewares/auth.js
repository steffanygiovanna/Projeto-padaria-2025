const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const validate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) 
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." }).end();

    try {
        const payload = jsonwebtoken.verify(token, process.env.SECRET_JWT);
        req.headers['cliente'] = payload; 
        next();
    } catch (err) {
        res.status(403).send({ message: "Token inválido ou expirado." }).end();
    }
}

const createHash = async (senha) => {
    if (!senha) return null;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(senha, salt);
        return hash;
    } catch (error) {
        console.error('Erro ao criar hash da senha do cliente:', error);
        throw new Error('Erro ao criar hash');
    }
}


const validatePassword = async (senha, hash) => {
    if (!senha || !hash) return false;
    try {
        return await bcrypt.compare(senha, hash);
    } catch (error) {
        console.error('Erro ao validar senha do cliente:', error);
        throw new Error('Erro ao validar senha');
    }
}

module.exports = { validate, createHash, validatePassword };
