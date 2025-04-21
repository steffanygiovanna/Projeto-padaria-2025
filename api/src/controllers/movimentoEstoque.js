const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const estoque = await prisma.estoque.create({
            data: req.body
        });
        return res.status(201).json(estoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    try {
        const estoques = await prisma.estoque.findMany();
        const total = estoques.reduce((soma, estoque) => soma + Number(estoque.valor), 0);
        return res.json({
            total,
            estoques
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const readOne = async (req, res) => {
    try {
        const estoque = await prisma.estoque.findUnique({
            where: {
                estoque_id: Number(req.params.id)
            }
        });
        return res.json(estoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const estoque = await prisma.estoque.update({
            where: {
                estoque_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(estoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.estoque.delete({
            where: {
                estoque_id: Number(req.params.id)
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