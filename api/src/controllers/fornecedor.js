const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const fornecedor = await prisma.fornecedor.create({
            data: req.body
        });
        return res.status(201).json(fornecedor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const fornecedor = await prisma.fornecedor.findMany();
    res.json(fornecedor);
}


const readOne = async (req, res) => {
    try {
        const fornecedor = await prisma.fornecedor.findUnique({
            where: {
                fornecedor_id: Number(req.params.id)
            }
        });
        return res.json(fornecedor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const fornecedor = await prisma.fornecedor.update({
            where: {
                fornecedor_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(fornecedor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.fornecedor.delete({
            where: {
                fornecedor_id: Number(req.params.id)
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