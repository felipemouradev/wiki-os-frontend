const express = require('express');
const router = express.Router();
const Register = require('./../models/Register');

router.get('/', (req, res, next) => {
    Register.find({}, (err, register) => {
        if (err) {
            console.log('Error: ', err);
        }
        res.send(JSON.stringify(register))
    }, next)
});

router.post('/', (req, res, next) => {
    const newUsers = new Register(req.body);
    newUsers.save().then(user => {
        res.status(200);
        res.json(user);
    }).catch(error => {
        res.status(400).send({error: error});
    });
});


router.delete('/remover/:id', (req, res, next) => {
    Register.findOneAndRemove(req.params.id).then(deletado => {
        res.status(200).send({
            message: "User removido com sucesso!!"
        })
    }).catch(error => {
        res.status(400).send({
            message: "Error ao remover, tente novamente",
            data: error
        })
    });
});
module.exports = router;