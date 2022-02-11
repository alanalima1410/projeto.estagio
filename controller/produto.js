const {Produto} = require("../bd");

let controller = {};

controller.criar = async (nome, valor, imagem, idcor, idmarca) => {
    try{
       return await Produto.create({
            nome,
             valor, 
             imagem,
             idcor,
             idmarca
        });
    } catch (erro) {
        console.log(erro);
        throw erro;
    }
};
controller.listar = async () => {
    try {
        return await Produto.findAll({
            attributes: ["nome", "valor", "imagem", "idcor", "idmarca"],
            order: [["nome", "DESC"]],
        });
    } catch (erro) {
        throw erro;
    }
};
controller.buscarPorId = async (id) => {
    try {
        return await Produto.findByPk(id);
    }catch (erro) {
        throw erro;
    }
};
controller.atualizar = async (id, { nome, valor, imagem, idcor, idmarca }) => {
    try {
    return await Produto.update(
    {
        nome, 
        valor, 
        imagem, 
        idcor, 
        idmarca

    },
    {
        where: {
            id
        }
    })
    } catch (erro) {
        throw erro;
    }
};
controller.remover = async (id) => {
    try {
        return await Produto.destroy({
            where: {
                id,
            },
        })
    } catch (erro) {
        throw erro;
    }
};

module.exports = controller;