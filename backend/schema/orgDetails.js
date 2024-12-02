import { client } from "../db";
export async function createOrgTable()
{
await client.query( `
CREATE TABLE org(
    orgId VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    description VARCHAR(255),
    overview VARCHAR(255),
    industry VARCHAR(255),
    company_size VARCHAR(255),
    headquarters VARCHAR(255)
)`
)
}
