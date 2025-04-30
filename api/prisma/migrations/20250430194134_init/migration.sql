-- CreateTable
CREATE TABLE `Cliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `telefone` INTEGER NOT NULL,
    `endereco` VARCHAR(100) NULL,

    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `produto_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `qtd_estoque` INTEGER NOT NULL,

    PRIMARY KEY (`produto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `pedido_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sub_total` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`pedido_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item_Pedido` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `data_venda` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quantidade` INTEGER NOT NULL,
    `preco_unitario` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `forma_pagamento` VARCHAR(100) NOT NULL,
    `valor_total` DECIMAL(10, 2) NOT NULL DEFAULT 0,

    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `funcionario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cargo` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`funcionario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovimentoEstoque` (
    `estoque_id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto_id` INTEGER NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `data_movimento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`estoque_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`cliente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_Pedido` ADD CONSTRAINT `Item_Pedido_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `Pedido`(`pedido_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_Pedido` ADD CONSTRAINT `Item_Pedido_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoEstoque` ADD CONSTRAINT `MovimentoEstoque_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
