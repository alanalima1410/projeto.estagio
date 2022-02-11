const { Router } = require("express");
const { criar, listar, buscarPorId, atualizar, remover } = require("../controller/produto");
const router = Router();

router.get("/id", async (req, res)=> {
    try {
        const { id } = req.params;
        let resposta;

        if (id) {
            resposta = await buscarPorId(id);
        }else{
            resposta = await listar();
        }

        res.send(resposta);
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ erro });
    }
});

router.post('/', async (req, res) => { //recurso para criar um novo produto
    try {
        //const { nome, valor, imagem, idcor, idmarca } = req.body;
        
        //const produtoCriado = await criar(nome, valor, imagem, idcor, idmarca);

       res.send("resposta");
        // res.send(produtoCriado); //manda uma resposta para o insomnia
    } catch (erro) {
        console.log(erro);
        res.status(500).send({erro}); //me avisa se houver erro
    }
});

router.put('/:id', async (req, res) => {
    try{
    let id = req.params.id;
    let dados = req.body;

   await atualizar(id, dados);
   const resultado = await buscarPorId(id);

    res.send(resulado);
} catch (erro) {
    res.status(500).send({ erro });
}
});

router.delete('/:id', async (req, res) => {
    try {
    await remover(req.params.id);

    res.send();
} catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
}
});
router.get("/", async (req, res)=> {
    //try {
        

       // if (id) {
          //  resposta = await buscarPorId(id);
       // }else{
           // resposta = await listar();
        //}

        res.send(resposta);
    //} catch (erro) {
       // console.log(erro);
        //res.status(500).send({ erro });
    //}
});

module.exports = router;