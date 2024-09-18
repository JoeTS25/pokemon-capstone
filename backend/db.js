// database setup for poke-app
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;
// a way to determine which db to connect to based on mode
if (process.env.NODE_ENV === "production") {
    db = new Client({
        ...getDatabaseUri(),
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    db = new Client({
    ...getDatabaseUri()
    });
}

db.connect();

module.exports = db;