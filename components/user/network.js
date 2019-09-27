const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', (req, res)=>{
    response.success(req, res, 'entregare un listado de usuarios');
})

router.post('/', (req, res)=>{
    response.success(req, res, 'creare un usuario');
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