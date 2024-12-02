import { client } from "../db";
export async function createUserTable()
{
await client.query( `

CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    firstName VARCHAR(255),
    middleName VARCHAR(255),
    lastName VARCHAR(255),
    about VARCHAR(255),

)`)}

