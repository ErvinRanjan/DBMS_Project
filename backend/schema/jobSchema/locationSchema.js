import { client } from '../../db.js';

export async function createLocation() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS location(
            locationId VARCHAR(255),
            jobId VARCHAR(255),
            location VARCHAR(255),
            PRIMARY KEY(jobId,locationId)
        )
        `);
    console.log('location created');
}