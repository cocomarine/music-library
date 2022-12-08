const { Client } = require('pg');
const path = require('path');

const loadEnv = (envName) => {
    const { NODE_ENV } = process.env;
    if (NODE_ENV != 'production') {

        const envFile = envName === 'test' ? '../.env.test' : '../.env';

        require('dotenv').config({
            path: path.join(__dirname, envFile),
        })

        const databaseName = process.env.PGDATABASE;

        delete process.env.PGDATABASE;

        return databaseName;
    }
}

const dropDatabase = async (databaseName) => {
    const client = new Client();

    try {
        await client.connect();

        console.log(`Dropping ${databaseName} database...`);

        await client.query(`DROP DATABASE ${databaseName}`);
    
        console.log('Database deleted');
    } catch (err) {
        console.log(err);
    } finally {
        client.end();
    }
}

const databaseName = loadEnv(envName);
dropDatabase(databaseName);