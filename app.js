const express = require('express');
const cors = require('cors'); 
const app = express();
require('dotenv').config();

const alquilerR = require('./routes/alquilerroutes');
const autosR = require('./routes/autosroutes');
const clientesR = require('./routes/clienteroutes');

const PORT = process.env.PORT || 7000;

// Middleware para analizar JSON
app.use(express.json());

app.use(cors());

console.log(process.env.DATABASE_URL); 

// Prefijos para cada conjunto de rutas
app.use('/api/alquiler', alquilerR);
app.use('/api/autos', autosR);
app.use('/api/clientes', clientesR);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
