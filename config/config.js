module.exports = {
    development: {
        username: process.env.DB_USER || 'alquiler_autosdb_owner',
        password: process.env.DB_PASSWORD || 'TQA2XSZ3FCfm',
        database: process.env.DB_NAME || 'alquiler_autosdb',
        host: process.env.DB_HOST || 'ep-spring-fire-a5qaowz7.us-east-2.aws.neon.tech',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,  // Puerto estándar de PostgreSQL
        dialectOptions: {
            ssl: {
                require: true,  // Requiere SSL
                rejectUnauthorized: false,  // Para evitar problemas con certificados
            },
        },
    },
    test: {
        username: process.env.DB_USER || 'alquiler_autosdb_owner',
        password: process.env.DB_PASSWORD || 'TQA2XSZ3FCfm',
        database: process.env.DB_NAME || 'alquiler_autosdb',
        host: process.env.DB_HOST || 'ep-spring-fire-a5qaowz7.us-east-2.aws.neon.tech',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    production: {
        username: process.env.DB_USER || 'alquiler_autosdb_owner',
        password: process.env.DB_PASSWORD || 'TQA2XSZ3FCfm',
        database: process.env.DB_NAME || 'alquiler_autosdb',
        host: process.env.DB_HOST || 'ep-spring-fire-a5qaowz7.us-east-2.aws.neon.tech',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
};
