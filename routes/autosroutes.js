const express = require('express');
const router = express.Router();


const autoController = require('../controller/autoscontroller');

router.get('/', autoController.autosDisponibles);
router.post('/', autoController.registrarAuto);

module.exports = router;
