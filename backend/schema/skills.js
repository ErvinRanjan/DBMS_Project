import { client } from "../db";
export async function createSkills()
{
await client.query( `
CREATE TABLE skills(
    skillId VARCHAR(255),
    userId VARCHAR(255),
    skill VARCHAR(255),
    PRIMARY KEY(userId,skillId) 
    
)`)};