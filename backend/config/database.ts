import pg from "pg";
import { KEYS } from "./keys";

const { Client } = pg;

export const client = new Client({
  connectionString: `postgres://${KEYS.DB_USER}:${KEYS.DB_PASSWORD}@${KEYS.DB_HOST}:${KEYS.DB_PORT}/${KEYS.DB_NAME}`,
});
