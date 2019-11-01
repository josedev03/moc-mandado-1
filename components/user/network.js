const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res)=>{
    
    const filterUser = req.query.user;

    controller.getUsers(filterUser)
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

router.patch('/:id', (req, res)=>{
    controller.updateUser(req.params.id, req.body.apellido)
        .then(data=>{
            response.success(req, res, 'Usuario actualizado correctamente', 202);
        })
        .catch(error =>{
            response.error(req, res, "Error interno", 500, error)
        })
})

router.delete('/:id', (req, res)=>{
    controller.deleteUser(req.params.id)
        .then(data =>{
            response.success(req, res, 'Usuario eliminado correctamente', 202);
        })
        .catch(error =>{
            response.error(req, res, "Error interno", 500, error)
        })
})

router.get('/:id', (req, res)=>{
    response.success(req, res, 'entregare un usuario');
})

router.put('/:id', (req, res)=>{
    response.success(req, res, 'actualizare un usuario');
})

module.exports = router;