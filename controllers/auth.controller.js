import * as authService from '../services/auth.service.js';


export const login = async (req, res, next) => {
try {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: 'Email y password obligatorios' });


const token = await authService.authenticate(email, password);
if (!token) return res.status(401).json({ message: 'Credenciales inválidas' });


res.json({ token: `Bearer ${token}` });
} catch (err) {
next(err);
}
};