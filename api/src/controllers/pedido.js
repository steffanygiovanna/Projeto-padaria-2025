const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: {
                sub_total: req.body.sub_total,
                data: req.body.data ? new Date(req.body.data) : undefined,
                cliente: {
                    connect: { cliente_id: Number(req.body.cliente_id) }
                }
            }
        });
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const pedido = await prisma.pedido.findMany();
    res.json(pedido);
}


const readOne = async (req, res) => {
    try {
        const pedido = await prisma.pedido.findUnique({
            where: {
                pedido_id: Number(req.params.id)
            }
        });
        return res.json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            where: {
                pedido_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.pedido.delete({
            where: {
                pedido_id: Number(req.params.id)
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