import { client } from "../db";
export async function createExperience()
{
await client.query( `
CREATE TABLE experience(
    userId VARCHAR(255),
    experienceId VARCHAR(255),
    role VARCHAR(255),
    company VARCHAR(255),
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    location VARCHAR(255),
    description VARCHAR(255),
    PRIMARY KEY(userId,experienceId)
)`)}
;