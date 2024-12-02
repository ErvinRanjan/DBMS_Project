import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pg;
export const client = new Client({
    database: process.env.PGDATABASE1
});

async function dbconnect() {
    try {
        await client.connect();
        console.log('db connected');
    } catch (err) {
        console.log('db failed to connect' + err);
    }
}

export default dbconnect;


