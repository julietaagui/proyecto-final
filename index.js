import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import { notFoundHandler } from './middlewares/error.middleware.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares
app.use(cors());
app.use(bodyParser.json());


// Rutas
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);


// Ruta raíz (opcional)
app.get('/', (req, res) => {
res.json({ ok: true, message: 'API Products - Proyecto Final' });
});


// 404 para rutas desconocidas
app.use(notFoundHandler);


// Error handler global (para que no se caiga el servidor)
app.use((err, req, res, next) => {
console.error(err);
const status = err.status || 500;
res.status(status).json({ error: err.message || 'Internal Server Error' });
});


app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));