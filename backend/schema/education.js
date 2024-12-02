import { client } from "../db";
export async function createEducation()
{
await client.query( ` 
CREATE TABLE education(
    userId VARCHAR(255),
    educationId VARCHAR(255),
    university VARCHAR(255),
    degree VARCHAR(255),
    field_of_study VARCHAR(255),
    start_date VARCHAR(255),
    end_date VARCHAR(255),
    grade VARCHAR(255),
    PRIMARY KEY(userId,educationId)
)`)
}