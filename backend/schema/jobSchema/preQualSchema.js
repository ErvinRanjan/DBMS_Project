import { client } from '../../db.js';

export async function createPreQual() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS preQual(
            preQualId VARCHAR(255),
            jobId VARCHAR(255),
            preQual VARCHAR(255),
            PRIMARY KEY(jobId,preQualId)
        )
        `);
    console.log('preQual created');
}