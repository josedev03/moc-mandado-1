const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res)=>{
    controller.getUsers()
        .then((listUsers)=>{
            response.success(req, res, listUsers, 200);
        })
        .catch((error)=>{
            response.error(req, res, "Error to find data", 400, error)
        });
})

router.post('/', (req, res)=>{

    controller.createUser(req.body)
        .then((newUser)=>{
            response.success(req, res, newUser, 201);
        })
        .catch((error)=>{
            response.error(req, res, "Informacion no valida", 400, error)
        })
})

router.get('/:id', (req, res)=>{
    response.success(req, res, 'entregare un usuario');
})

router.put('/:id', (req, res)=>{
    response.success(req, res, 'actualizare un usuario');
})

router.delete('/:id', (req, res)=>{
    response.success(req, res, 'eliminare un usuario');
})

module.exports = router;