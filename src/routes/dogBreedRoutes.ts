import { Router } from 'express';
import { getAllDogBreeds, createDogBreed, updateDogBreed, deleteDogBreed, getDogBreedById } from '../controllers/dogBreedController';
import { syncDogBreeds } from '../controllers/dogBreedSyncController';
const router = Router();

// Ruta para crear una raza de perro
router.post('/dogbreeds', createDogBreed);
// Ruta para obtener todas las razas de perro
router.get('/dogbreeds', getAllDogBreeds);
// Ruta para obtener una raza de perro por ID
router.get('/dogbreeds/:id', getDogBreedById);
// Ruta para actualizar una raza de perro por ID
router.put('/dogbreeds/:id', updateDogBreed);
// Ruta para eliminar una raza de perro por ID
router.delete('/dogbreeds/:id', deleteDogBreed);

// Ruta para sincronizar razas de perros desde la API externa
router.get('/sync', syncDogBreeds);

export default router;
