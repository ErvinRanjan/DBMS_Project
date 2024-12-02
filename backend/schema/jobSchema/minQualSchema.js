import { client } from '../../db.js';

export async function createMinQual() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS minQual(
            minQualId VARCHAR(255),
            jobId VARCHAR(255),
            minQual VARCHAR(255),
            PRIMARY KEY(jobId,minQualId)
        )
        `);
    console.log('minQual created');
}