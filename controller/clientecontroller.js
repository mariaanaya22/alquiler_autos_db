const bcrypt = require('bcrypt');
const { Cliente } = require('../models');

 //login
 exports.loginCliente = async (req, res) => {
  const { correo, contraseña } = req.body; // Obtener correo y contraseña
  try {
      const usuario = await cliente.findOne({ where: { correo } }); // Buscar por correo
      if (!usuario) {
          return res.status(404).json({ mensaje: 'Correo no encontrado' });
      }

      const esValida = await bcrypt.compare(contraseña, usuario.contraseña); // Comparar contraseña
      if (!esValida) {
          return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
      }

      res.json({ mensaje: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};
  ////////////////////////////
exports.registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numLic, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de salt rounds
    const nuevoCliente = await Cliente.create({ nombre, correo, numLic, password: hashedPassword });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error("Error al crear el cliente:", error);
    res.status(500).json({ mensaje: "Error al crear el cliente", error: error.message });
  }
};

exports.verclientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
    res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
  }
};
