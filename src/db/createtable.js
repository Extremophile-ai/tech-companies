import dotenv from "dotenv";
import pool from "./db";

dotenv.config();

async function tableSchema() {
  const dropTable = `DROP TABLE IF EXISTS ng_tech_companies`;
  const createTable = `CREATE TABLE NG_tech_companies (
        id SERIAL PRIMARY KEY NOT NULL, 
        name VARCHAR(200) UNIQUE NOT NULL, 
        location VARCHAR(300)  UNIQUE NOT NULL, 
        name_of_ceo TEXT NOT NULL,
        year_founded integer,
        email VARCHAR,
        website VARCHAR
      );`;

  const client = pool.connect();
  try {
    await client.query(dropTable);
    await client.query(createTable);
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.release();
  }
  return false;
}

tableSchema();
