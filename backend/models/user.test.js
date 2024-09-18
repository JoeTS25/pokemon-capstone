const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
  } = require("../expressError");

  const db = require("../db.js");
const User = require("./user.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/* Authenticate */

describe("authenticate", function () {
    test("works", async function () {
        const user = await User.authenticate("u1", "password1");
        expect(user).toEqual({
          username: "u1",
          email: "u1@email.com",
        });
      });

      test("unauth if no such user", async function () {
        try {
          await User.authenticate("nope", "password");
          fail();
        } catch (err) {
          expect(err instanceof UnauthorizedError).toBeTruthy();
        }
      });
    
      test("unauth if wrong password", async function () {
        try {
          await User.authenticate("c1", "wrong");
          fail();
        } catch (err) {
          expect(err instanceof UnauthorizedError).toBeTruthy();
        }
      });
});

/* Register User */

describe("register", function() {
    const newUser = {
        username: "new",
        email: "test@test.com",
      };

      test("works", async function () {
        let user = await User.register({
          ...newUser,
          password: "password",
        });
        expect(user).toEqual(newUser);
        const found = await db.query("SELECT * FROM users WHERE username = 'new'");
        expect(found.rows.length).toEqual(1);
        expect(found.rows[0].password.startsWith("$2b$")).toEqual(true);
      });
});

/* GET user */

describe("get", function () {
    test("works", async function () {
        let user = await User.get("u1");
        expect(user).toEqual({
          username: "u1",
          email: "u1@email.com",
        });
      });

      test("not found if no such user", async function () {
        try {
          await User.get("nope");
          fail();
        } catch (err) {
          expect(err instanceof NotFoundError).toBeTruthy();
        }
      });
});

/* UPDATE user */

describe("update", function () {
    const updateData = {
        email: "new@email.com",
    };

    test("works", async function () {
        let job = await User.update("u1", updateData);
        expect(job).toEqual({
          username: "u1",
          ...updateData,
        });
      });    
});

/* DELETE user */

describe("remove", function () {
    test("works", async function () {
      await User.remove("u1");
      const res = await db.query(
          "SELECT * FROM users WHERE username='u1'");
      expect(res.rows.length).toEqual(0);
    });
  
    test("not found if no such user", async function () {
      try {
        await User.remove("nope");
        fail();
      } catch (err) {
        expect(err instanceof NotFoundError).toBeTruthy();
      }
    });
  });