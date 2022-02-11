const { Cor, sequelize } = require("../bd");

const controller = {};

controller.criar = async (nome) => {

    try{
    return await Cor.create(
    {
       nome
    });
            } catch (erro) {
            throw erro;
            }
        };


        controller.buscarPorId = async (idcor) => {
            try {
                return await Cor.findByPk(idcor);

            } catch (erro) {
                throw erro;
            }
        };
        controller.listar = async () => {
            try {
                return await Cor.findAll({
                    attributes: ["nome"],
                
                });
            } catch (erro) {
                throw erro;
            }
        };
        controller.atualizar = async (idcor, { nome }) => {
            try {
            return await Cor.update(
            {
                nome,
               
            },
            {
                where: {
                    idcor
                }
            })
            } catch (erro) {
                throw erro;
            }
        };
        controller.remover = async (idcor) => {
            try {
                return await Cor.destroy({
                    where: {
                        idcor,
                    },
                })
            } catch (erro) {
                throw erro;
            }
        };
    module.exports = controller;