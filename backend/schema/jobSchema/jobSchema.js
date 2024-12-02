import { client } from '../../db.js';

export async function createJobs() {
    await client.query(`
            CREATE TABLE IF NOT EXISTS jobs(
                jobId VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255),
                about VARCHAR(5000),
                companyImg VARCHAR(255),
                companyName VARCHAR(255),
                requiredExperience INT,
                requiredDegree INT,
                dateOfPost VARCHAR(255),
                deadline VARCHAR(255)
            )
        `)
    console.log('jobs created');
}


