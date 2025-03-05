const { Autos } = require('../models');

exports.autosDisponibles = async (req, res) => {
    try {
        const autos = await Autos.findAll({ 
            where: { disponibilidad: 1 } 
        });
        res.json(autos);
    } catch (e) {
        res.json({ mensaje: "error" });
    }
};

exports.registrarAuto = async (req, res) => {
                                                                                                                                                                                                                                                                                                                                                                                                       
    const { marca, modelo, imagen, valorAlquiler, anio, disponibilidad } = req.body; 
    try {
   
        const autoData = { marca, modelo, imagen, valorAlquiler, anio };
        if (disponibilidad !== undefined) {
            autoData.disponibilidad = disponibilidad;
        }

        const nuevoAuto = await Autos.create(autoData);
        res.json(nuevoAuto);

    } catch (e) {
        console.error('Error al crear el auto:', e); 
        res.status(500).json({ mensaje: "Error al crear el auto", error: e.message });
    }
};
