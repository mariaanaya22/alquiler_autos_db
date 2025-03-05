const express = require('express');
const router = express.Router();
const alquilerController = require('../controller/alquilercontroller');


router.post('/', alquilerController.realizarAlquiler);
router.get('/historial', alquilerController.historial);

module.exports = router;
