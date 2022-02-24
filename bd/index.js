const { Sequelize, DataTypes } = require("sequelize");

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


module.exports = { sequelize, Sequelize, Produto };