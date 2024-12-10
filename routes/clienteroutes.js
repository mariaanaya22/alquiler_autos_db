const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');
router.get('/loginclientes', clienteController.loginCliente);
router.post('/RegistrarClientes', clienteController.registrarCliente);
router.get('/verclientes', clienteController.verclientes);

module.exports = router;
