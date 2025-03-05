const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');
router.post('/login', clienteController.loginCliente);
router.post('/', clienteController.registrarCliente);
router.get('/', clienteController.verclientes);

module.exports = router;
