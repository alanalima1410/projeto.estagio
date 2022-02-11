const { Marca, sequelize } = require("../bd");

const controller = {};

controller.criar = async (nome) => {

    try{
    return await Marca.create(
    {
       nome
    });
            } catch (erro) {
            throw erro;
            }
        };

        controller.buscarPorId = async (idmarca) => {
            try {
                return await Marca.findByPk(idmarca);

            } catch (erro) {
                throw erro;
            }
        };
        controller.listar = async () => {
            try {
                return await Marca.findAll({
                    attributes: ["nome"],
                
                });
            } catch (erro) {
                throw erro;
            }
        };
        controller.atualizar = async (idmarca, { nome }) => {
            try {
            return await Marca.update(
            {
                nome,
               
            },
            {
                where: {
                    idmarca
                }
            })
            } catch (erro) {
                throw erro;
            }
        };
        controller.remover = async (idmarca) => {
            try {
                return await Marca.destroy({
                    where: {
                        idmarca,
                    },
                })
            } catch (erro) {
                throw erro;
            }
        };
    module.exports = controller;
