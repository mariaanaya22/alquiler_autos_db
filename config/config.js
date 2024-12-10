module.exports = {
    development: {
        username: 'root',
        password: 'samuel22',
        database: 'Autos',
        host: '127.0.0.1',
        dialect: 'mysql', // O el motor que estés usando: 'postgres', 'sqlite', etc.
    },
    test: {
        username: 'usuario',
        password: 'contraseña',
        database: 'nombre_base_datos_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'usuario',
        password: 'contraseña',
        database: 'nombre_base_datos_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
