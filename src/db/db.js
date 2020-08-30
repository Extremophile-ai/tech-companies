import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
// console.log(process.env.TEST_DB_URL);
let connect;

if (process.env.NODE_ENV === "test") {
  connect = {
    connectionString: process.env.TEST_DB_URL,
  };
} else {
  connect = {
    connectionString: process.env.DATABASE_URL,
  };
}

const pool = new Pool(connect);

pool.on('connect', () => {
  console.log('connected to the db');
});

export default pool;
