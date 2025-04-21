const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const funcionario = await prisma.funcionario.create({
            data: req.body
        });
        return res.status(201).json(funcionario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const funcionario = await prisma.funcionario.findMany();
    res.json(funcionario);
}


const readOne = async (req, res) => {
    try {
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                funcionario_id: Number(req.params.id)
            }
        });
        return res.json(funcionario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const funcionario = await prisma.funcionario.update({
            where: {
                funcionario_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(funcionario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.funcionario.delete({
            where: {
                funcionario_id: Number(req.params.id)
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