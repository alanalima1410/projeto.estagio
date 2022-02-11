const { Router } = require("express");
const router = Router();
const { criar, buscarPorId, listar, atualizar, remover } = require("../controller/cor");

router.post("/", async (req, res) => {//funcionando para criar a cor
    try {
        const { nome } = req.body;
         
        const corCriado = await criar(nome);

        res.send(corCriado);
    } catch (erro) {
        res.status(500).send({ erro });
    }
    console.log("cor");
   
});

    router.put('/:idcor', async (req, res) => {//funcionando para atualizar as cores
    try{
    const { idcor } = req.params;
    const dados = req.body;
    await atualizar(idcor, dados);
    const corAtualizada = await buscarPorId (idcor);
    

    res.send(corAtualizada);
} catch (erro) {
    res.status(500).send({ erro });
}
console.log("cor");
});

router.get("/:idcor", async (req, res) => {//funcionando para listar as cores
    try {
        const { idcor } = req.params;
        let resposta;
        console.log(resposta);
        if(idcor){
            resposta = await buscarPorId(idcor);
        }

        res.send(resposta);
    } catch (erro){
        console.log(erro);
        res.status(500).send({ erro });
    }
});
router.delete('/:idcor', async (req, res) => {//funcionando para remover as cores
    try {
    await remover(req.params.idcor);

    res.send();
} catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
}
});

router.get("/", async (req, res) => {//para buscar todos (funcionando)
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
