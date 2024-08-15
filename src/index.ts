import express, { Application, Request, Response } from 'express';
import connectDB from './config/db'; 
import dogBreedRoutes from './routes/dogBreedRoutes'; 
import cors from 'cors'; 

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type'] 
}));

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Configurar rutas
app.use('/api', dogBreedRoutes);

// Ruta raíz
app.get('/', (req: Request, res: Response) => {
    res.send('¡Hola, Dogpedia!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
    console.error('Error al iniciar el servidor:', err);
});
