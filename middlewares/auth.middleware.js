import { verifyToken } from '../services/auth.service.js';

export const authenticate = (req, res, next) => {
try {
const authHeader = req.headers.authorization;
if (!authHeader) return res.status(401).json({ message: 'No se proporcionó token' });

const parts = authHeader.split(' ');
if (parts.length !== 2) return res.status(401).json({ message: 'Token mal formado' });

const scheme = parts[0];
const token = parts[1];
if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: 'Formato de token inválido' });

const decoded = verifyToken(token);
if (!decoded) return res.status(401).json({ message: 'Token inválido o expirado' });

req.user = decoded;
next();
} catch (err) {
next(err);
}
};