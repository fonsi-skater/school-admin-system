import { Pool } from 'pg';

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connected to the database successfully'))
    .catch(err => console.error('Connection error', err.stack));

export default pool;