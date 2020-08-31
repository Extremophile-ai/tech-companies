import dotenv from "dotenv";
import pool from "./db/db";
import { createTable } from "./query";

dotenv.config();

const tableSchema = () => {
  const dropTable = `DROP TABLE IF EXISTS ng_tech_companies`;
  const client = pool.connect();
  // client = new Pool(connect).connect()
  try {
    client
      .query(dropTable)
      .query(createTable)
      .then((res) => {
        console.log('connected to the database');
      });
  } catch (err) {
    console.log(err.stack);
    client.end();
  }
};

export default tableSchema;
