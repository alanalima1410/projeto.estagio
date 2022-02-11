const { Sequelize, DataTypes } = require("sequelize");

let initCor = require("./cor");
let initMarca = require("./marca");
let initProduto = require("./produto");

const options = {
    username: "postgres",
    password: "alana123",
    host: "localhost",
    dialect: "postgres",
    database: "projeto.estagio",
};
const sequelize = new Sequelize(options);

sequelize
.authenticate()
.then(() => {
    console.log("Conectado ao banco de dados");
})
.catch((erro) => {
    console.log(erro);
});

const Produto = initProduto(sequelize, DataTypes);
const Cor = initCor(sequelize, DataTypes);
const Marca = initMarca(sequelize, DataTypes);


Produto.belongsTo(Cor, { as: "cor", foreignKey: "idcor"});
Produto.belongsTo(Marca, { as: "marca", foreignKey: "idmarca"});

module.exports = { sequelize, Sequelize, Cor, Marca, Produto };