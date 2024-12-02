import { client } from '../../db.js';

export async function createSkill() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS skill(
            skillId VARCHAR(255),
            jobId VARCHAR(255),
            skill VARCHAR(255),
            PRIMARY KEY(jobId,skillId)
        )
        `);
    console.log('skill created');
}