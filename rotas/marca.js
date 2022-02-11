const { Router } = require("express");
const router = Router();
const { criar, buscarPorId, listar, atualizar, remover } = require("../controller/marca");

router.post("/", async (req, res) => {//funcionando para criar a marca
    try {
        const { nome } = req.body;
         
        const marcaCriado = await criar(nome);

        res.send(marcaCriado);
    } catch (erro) {
        res.status(500).send({ erro });
    }
    console.log("marca");
   
});
router.put('/:idmarca', async (req, res) => {//funcionando para atualizar as marcas
    try{
    const { idmarca } = req.params;
    const dados = req.body;
    await atualizar(idmarca, dados);
    const marcaAtualizada = await buscarPorId (idmarca);
    

    res.send(marcaAtualizada);
} catch (erro) {
    res.status(500).send({ erro });
}
console.log("marca");
});

router.get("/:idmarca", async (req, res) => {//funcionando para listar as marcas
    try {
        const { idmarca } = req.params;
        let resposta;
        console.log(resposta);
        if(idmarca){
            resposta = await buscarPorId(idmarca);
        }

        res.send(resposta);
    } catch (erro){
        console.log(erro);
        res.status(500).send({ erro });
    }
});
router.delete('/:idmarca', async (req, res) => {//funcionando para remover as marcas
    try {
    await remover(req.params.idmarca);

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

