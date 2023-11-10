import { VITE_DATABASE_URL } from "$env/static/private";
import pg from "pg";
const { Client } = pg;

export const db = new Client({
  connectionString: VITE_DATABASE_URL,
});
