const { Autos } = require('../models');

// Obtener autos disponibles
exports.autosDisponibles = async (req, res) => {
    try {
        console.log("📢 Consultando autos..."); // Depuración
        const autos = await Autos.findAll();
        console.log("✅ Autos encontrados:", autos); // Depuración
        res.json(autos);
    } catch (e) {
        console.error('❌ Error al obtener autos:', e);
        res.status(500).json({ mensaje: "Error al obtener autos", error: e.message });
    }
};

// Registrar un auto
exports.registrarAuto = async (req, res) => {
    const { marca, modelo, imagen, valorAlquiler, anio, disponibilidad } = req.body;
    
    try {
        if (!marca || !modelo || !valorAlquiler || !anio) {
            return res.status(400).json({ mensaje: "Todos los campos obligatorios deben estar llenos" });
        }

        const autoData = { 
            marca, 
            modelo, 
            imagen: imagen || "https://via.placeholder.com/150", // Imagen por defecto
            valorAlquiler, 
            anio, 
            disponibilidad: disponibilidad !== undefined ? Boolean(disponibilidad) : true 
        };

        const nuevoAuto = await Autos.create(autoData);
        res.status(201).json(nuevoAuto);
    } catch (e) {
        console.error('Error al crear el auto:', e);
        res.status(500).json({ mensaje: "Error al crear el auto", error: e.message });
    }
};
