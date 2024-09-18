// handles common auth cases in routes

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../expressError");

/* Auth user: if token is provided, verify. if valid
* store token payload on res.locals (will include
* username and userId field) */

function authenticateJWT(req, res, next) {
    try {
        const authHeader = req.headers && req.headers.authorization;
        if (authHeader) {
            const token = authHeader.replace(/^[Bb]earer /, "").trim();(/^[Bb]earer /, "").trim();
            res.locals.user = jwt.verify(token, SECRET_KEY);
        }
        return next();
    } catch (err) {
        return next();
    }
}

/* Used when they must be logged in.  If not, raises Unauthorized */

function ensureLoggedIn(req, res, next) {
    try {
        if (!res.locals.user) throw new UnauthorizedError();
        return next();
    } catch (err) {
        return next(err);
    }
}

function ensureUser(req, res, next) {
    try {
        const user = res.locals.user;
        if(!(user && (user.username === req.params.username))) {
            console.log(user.username, req.params.username);
            throw new UnauthorizedError();
        }
        return next();
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    authenticateJWT,
    ensureLoggedIn,
    ensureUser,
};