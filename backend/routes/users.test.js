const request = require("supertest");
const db = require("../db.js");
const app = require("../app");
const User = require("../models/user");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    u1Token,
    u2Token,
  } = require("./_testCommon");
const { default: test, describe } = require("node:test");

  beforeAll(commonBeforeAll);
  beforeEach(commonBeforeEach);
  afterEach(commonAfterEach);
  afterAll(commonAfterAll);

  /* POST Users */
  
  describe("POST /users", function () {
    test("unauth for users", async function () {
        const resp = await request(app)
            .post("/users")
            .send({
              username: "u-new",
              password: "password-new",
              email: "new@email.com",
            })
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.statusCode).toEqual(404);
      });
});

/* GET usernames */

describe("GET /users/:username", function () {
    test("works for same user", async function () {
        const resp = await request(app)
            .get(`/users/u1`)
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.body).toEqual({
          user: {
            username: "u1",
            email: "u1@email.com",
          },
        });
      });
    
      test("unauth for other users", async function () {
        const resp = await request(app)
            .get(`/users/u1`)
            .set("authorization", `Bearer ${u2Token}`);
        expect(resp.statusCode).toEqual(401);
      });
});

/* PATCH user */

describe("PATCH /users/:username", () => {
    test("works for same user", async function () {
        const resp = await request(app)
            .patch(`/users/u1`)
            .send({
              email: "New@mail.com",
            })
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.body).toEqual({
          user: {
            username: "u1",
            email: "New@mail.com",
          },
        });
      });
    
      test("unauth if not same user", async function () {
        const resp = await request(app)
            .patch(`/users/u1`)
            .send({
              email: "New@mail.com",
            })
            .set("authorization", `Bearer ${u2Token}`);
        expect(resp.statusCode).toEqual(401);
      });
});

/* DELETE username */

describe("DELETE /users/:username", function () {
    test("works for same user", async function () {
        const resp = await request(app)
            .delete(`/users/u1`)
            .set("authorization", `Bearer ${u1Token}`);
        expect(resp.body).toEqual({ deleted: "u1" });
      });
    
      test("unauth if not same user", async function () {
        const resp = await request(app)
            .delete(`/users/u1`)
            .set("authorization", `Bearer ${u2Token}`);
        expect(resp.statusCode).toEqual(401);
      });
})

