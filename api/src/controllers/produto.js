const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const produto = await prisma.produto.create({
            data: req.body
        });
        return res.status(201).json(produto);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const produto = await prisma.produto.findMany();
    res.json(produto);
}


const readOne = async (req, res) => {
    try {
        const produto = await prisma.produto.findUnique({
            where: {
                produto_id: Number(req.params.id)
            }
        });
        return res.json(produto);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const produto = await prisma.produto.update({
            where: {
                produto_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(produto);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.produto.delete({
            where: {
                produto_id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { 
    create, 
    read, 
    readOne, 
    update, 
    remove 
};