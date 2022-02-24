const express = require("express");
const app = express();
const Cors = require("cors");

app.use(express.json());
app.use(Cors());

const produto = require ("./rotas/produto");
const { sequelize } = require("./bd");


app.get("/", (req, res) => {
    res.send({mensagem: "Bem vindo!"});
});

app.use("/produto", produto);

app.listen(3001, () => {
    console.log("Aplicação iniciada");
});
