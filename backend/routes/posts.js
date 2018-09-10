const express = require('express');
const router = express.Router();
const Posts = require('./../models/Posts');

router.get('/', (req, res, next) => {
    Posts.find({}, (err, posts) => {
        if (err) {
            console.log('Error: ', err);
        }
        res.send(JSON.stringify(posts))
    }, next)
});

router.post('/', (req, res, next) => {
    const newPost = new Posts(req.body);
    newPost.save().then(prdt => {
        res.status(200);
        res.json(prdt);
    }).catch(error => {
        res.status(400).send({error: error});
    });
});

router.put('/edit/:id', (req, res, next) => {
    Posts.findByIdAndUpdate(req.params.id, {
        $set: {
            nome: req.body.nome,
            valor: req.body.valor,
            qtd: req.body.qtd
        }
    }).then(editado => {
        res.status(200).send({
            message: "Produto editado com sucesso!!"
        })
    }).catch(error => {
        res.status(400).send({
            message: "Error ao editar, tente novamente",
            data: error
        })
    });
});


router.delete('/remover/:id', (req, res, next) => {
    Posts.findOneAndRemove(req.params.id).then(deletado => {
        res.status(200).send({
            message: "Produto removido com sucesso!!"
        })
    }).catch(error => {
        res.status(400).send({
            message: "Error ao remover, tente novamente",
            data: error
        })
    });
});
module.exports = router;