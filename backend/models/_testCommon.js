const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { createToken } = require("../helpers/tokens");

async function commonBeforeAll() {
    await db.query("DELETE FROM users");

    await db.query(`
        INSERT INTO users(username,
                          password,
                          email)
        VALUES ('u1', $1, 'u1@email.com'),
               ('u2', $2, 'u2@email.com')
        RETURNING username`,
      [
        await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
        await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
      ]);
}

async function commonBeforeEach() {
    await db.query("BEGIN");
  }
  
  async function commonAfterEach() {
    await db.query("ROLLBACK");
  }
  
  async function commonAfterAll() {
    await db.end();
  }
  
  
  module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
  };
