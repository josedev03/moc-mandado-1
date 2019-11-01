const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

// TODO: hacer el llamado al controlador

router.get('/', (req, res)=>{
    controller.getItems()
    .then(listItems => {
        response.success(req, res, listItems, 200);
    })
    .catch(err => {
        response.error(req, res, "Error to find data", 400, err)
    })
});

router.post('/', (req, res)=>{

    controller.createItem(req.body)
    .then(item => {
        response.success(req, res, item, 200);
    })
    .catch(err => {
        response.error(req, res, "Informacion no valida", 400, err)
    })
});

module.exports = router;