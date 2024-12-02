import { client } from '../../db.js';

export async function createResp() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS resp(
            respId VARCHAR(255),
            jobId VARCHAR(255),
            resp VARCHAR(255),
            PRIMARY KEY(jobId,respId)
        )
        `);
    console.log('resp created');
}