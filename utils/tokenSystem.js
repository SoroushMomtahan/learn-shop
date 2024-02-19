// import
import jwt from "jsonwebtoken";
import logError from "./devLog.js";
// create token
export function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_IN,
    });
}
// verify token
export function verifyToken(payload) {
    try {
        return jwt.verify(payload, process.env.JWT_SECRET_KEY);
    } catch (err) {
        logError('verify token failed - ' + err, 'utils error', '', {});
        throw err;
    }
}
