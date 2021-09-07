import { Low, JSONFile } from 'lowdb';

// LowDB supports multiple kind of ways to save data via these adapters
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// This reads data from out JSON file, assigining a value to db.data
await db.read();

// If db.json doesn't exist, db.data will be null; Set default data
db.data = db.data || { messages: [] };

// Write data to the database
db.data.messages.push("Hellooooooooooooooooo");
console.log(db.data.messages);

// This actually writes our updated database to the file
await db.write();
