import Database from 'better-sqlite3';
import { hash } from 'bcryptjs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'users.db');
const db = new Database(dbPath);

// Initialize the database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  created_at: string;
}

export function getUserByEmail(email: string): User | undefined {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email) as User | undefined;
}

export function createUser(email: string, password: string, name: string): User {
  const stmt = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)');
  const info = stmt.run(email, password, name);
  
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid) as User;
  return user;
}

export default db;
