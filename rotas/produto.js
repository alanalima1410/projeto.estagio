const { Router } = require("express");
const router = Router();
const { criar, buscarPorId, listar, atualizar, remover } = require("../controller/produto");

router.post("/", async (req, res) => {//funcionando para criar o produto!!!!
    try {
        const { nome, valor, imagem, cor, marca } = req.body;
         
        const produtoCriado = await criar(nome, valor, imagem, cor, marca);

        res.send(produtoCriado);
    } catch (erro) {
        res.status(500).send({ erro });
    }
    console.log("produto");
   
});
router.put('/:id', async (req, res) => {// para atualizar os produtos funcionando
    try{
    const { id } = req.params;
    const dados = req.body;
    await atualizar(id, dados);
    const produtoAtualizado = await buscarPorId (id);
    

    res.send(produtoAtualizado);
} catch (erro) {
    res.status(500).send({ erro });
}
console.log("produto");
});

router.get("/:id?", async (req, res) => {// funcionando para listar os produtos
    try {
        const { id } = req.params;
        let resposta;
        console.log(resposta);
        if(id){
            resposta = await buscarPorId(id);
        } else {
            resposta = await listar();
        }

        res.send(resposta);
    } catch (erro){
        console.log(erro);
        res.status(500).send({ erro });
    }
});
router.delete('/:id', async (req, res) => {// para remover os produtos funcionando
    try {
    await remover(req.params.id);

    res.send();
} catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
}
});
router.get("/", async (req, res) => {//funcionando para buscar todos 
    try {
        let resposta;
        console.log(resposta);
 
            resposta = await listar();
        

        res.send(resposta);
    } catch (erro){
        console.log(erro);
        res.status(500).send({ erro });
    }
});

module.exports = router;
