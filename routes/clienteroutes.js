const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');
router.get('/', clienteController.verclientes);
router.post('/login', clienteController.loginCliente);
router.post('/', clienteController.registrarCliente);


module.exports = router;
