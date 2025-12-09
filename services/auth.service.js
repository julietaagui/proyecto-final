import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecreto';
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || '2h';

export const authenticate = async (email, password) => {
const allowedEmail = process.env.AUTH_EMAIL;
const allowedPassword = process.env.AUTH_PASSWORD;

if (email === allowedEmail && password === allowedPassword) {
const payload = { email };
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
return token;
}

return null;
};

export const verifyToken = (token) => {
try {
const decoded = jwt.verify(token, JWT_SECRET);
return decoded;
} catch (err) {
return null;
}
};