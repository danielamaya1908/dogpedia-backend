import { Request, Response } from 'express';
import DogBreed from '../models/DogBreed';
import { fetchDogBreedsFromApi } from '../services/dogApiService';

export const syncDogBreeds = async (req: Request, res: Response) => {
    try {
        // Obtener datos de la API
        const apiBreeds = await fetchDogBreedsFromApi();

        // Transformar datos para que coincidan con tu modelo de datos
        const breedsToSave = apiBreeds.map((breed: any) => ({
            name: breed.name,
            image: breed.image?.url || 'No image', // Asume que la API proporciona la URL de la imagen
            temperament: breed.temperament || 'Unknown',
            lifeExpectancy: breed.life_span || 'Unknown',
            weight: breed.weight.metric || 'Unknown',
            height: breed.height.metric || 'Unknown'
        }));

        // Eliminar datos existentes y guardar nuevos
        await DogBreed.deleteMany({});
        await DogBreed.insertMany(breedsToSave);

        res.status(200).json(breedsToSave);
    } catch (error) {
        console.error('Error al sincronizar razas de perros:', error);
        res.status(500).json({ message: 'Error al sincronizar razas de perros', error });
    }
};
