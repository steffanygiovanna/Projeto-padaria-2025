const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    req.body.sub_total = req.body.pizza.valor * req.body.quantidade;
    try {
        const item = await prisma.item.create({
            data: req.body
        });
        return res.status(201).json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const item = await prisma.item.findMany();
    return res.json(item);
}

const readOne = async (req, res) => {
    try {
        const item = await prisma.item.findUnique({
            where: {
                item_id: Number(req.params.id)

            }
        });
        return res.json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const item = await prisma.item.update({
            where: {
                item_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.item.delete({
            where: {
                item_id : Number(req.params.id)
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