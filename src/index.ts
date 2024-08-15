import express, { Application, Request, Response } from 'express';
import connectDB from './config/db'; // Conexión a la base de datos
import dogBreedRoutes from './routes/dogBreedRoutes'; // Rutas de razas de perros
import cors from 'cors'; // Middleware para manejar CORS

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001', // Permitir solicitudes solo desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type'] // Encabezados permitidos
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
