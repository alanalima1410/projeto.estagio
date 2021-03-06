const { Produto, sequelize } = require("../bd");

const controller = {};

controller.criar = async (nome, valor, imagem, cor, marca) => {

    try{
    return await Produto.create(
    {
        nome, 
        valor, 
        imagem, 
        cor, 
        marca
    });
            } catch (erro) {
            throw erro;
            }
        };

        controller.buscarPorId = async (id) => {//funcionando
            try {
                return await Produto.findByPk(id);

            } catch (erro) {
                throw erro;
            }
        };
        controller.listar = async () => {//funcionando
            try {
                return await Produto.findAll({
                    attributes: ["id", "nome", "valor", "imagem", "cor", "marca"],
                    order: [["id"]],
                
                });
            } catch (erro) {
                throw erro;
            }
        };
        controller.atualizar = async (id, { nome, valor, imagem, cor, marca }) => {
            try {
            return await Produto.update(
            {
                nome, 
                valor, 
                imagem, 
                cor, 
                marca
               
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
