const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { produto_id, tipo, quantidade, data_movimento } = req.body;

        const movimentoEstoque = await prisma.movimentoEstoque.create({
            data: {
                tipo,
                quantidade: Number(quantidade),
                data_movimento: data_movimento ? new Date(data_movimento) : undefined,
                produto: {
                    connect: { produto_id: Number(produto_id) }
                }
            }
        });

        return res.status(201).json(movimentoEstoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    const movimentoEstoque = await prisma.movimentoEstoque.findMany();
    res.json(movimentoEstoque);
}


const readOne = async (req, res) => {
    try {
        const movimentoEstoque = await prisma.movimentoEstoque.findUnique({
            where: {
                movimentoEstoque_id: Number(req.params.id)
            }
        });
        return res.json(movimentoEstoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { produto_id, tipo, quantidade, data_movimento } = req.body;

        const movimentoEstoque = await prisma.movimentoEstoque.update({
            where: { estoque_id: Number(req.params.id) },
            data: {
                tipo,
                quantidade: Number(quantidade),
                data_movimento: data_movimento ? new Date(data_movimento) : undefined,
                produto: {
                    connect: { produto_id: Number(produto_id) }
                }
            }
        });

        return res.status(202).json(movimentoEstoque);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.movimentoEstoque.delete({
            where: { estoque_id: Number(id) }
        });

        return res.status(204).json({ message: "Movimento de estoque removido com sucesso" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};