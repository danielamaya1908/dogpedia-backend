import { Request, Response } from 'express';
import DogBreed from '../models/DogBreed';


export const createDogBreed = async (req: Request, res: Response) => {
    try {
        // Mostrar el cuerpo de la solicitud
        console.log('Datos recibidos:', req.body);

        const { name, image, temperament, lifeExpectancy, weight, height } = req.body;

        // Validar que todos los campos necesarios están presentes
        if (!name || !image || !temperament || !lifeExpectancy || !weight || !height) {
            console.log('Datos incompletos:', { name, image, temperament, lifeExpectancy, weight, height });
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Crear una nueva raza de perro
        const newDogBreed = new DogBreed({ name, image, temperament, lifeExpectancy, weight, height });
        await newDogBreed.save();

        // Enviar respuesta exitosa
        res.status(201).json(newDogBreed);
    } catch (err) {
        console.error('Error al crear la raza de perro:', err);
        res.status(500).json({ message: 'Error al crear la raza de perro', error: err });
    }
};

export const getAllDogBreeds = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, searchTerm = '', selectedFilter = '' } = req.query;
        
        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
        const limitNumber = parseInt(limit as string);
        
        const query: any = {};
        
        if (searchTerm) {
            query.$or = [
                { name: new RegExp(searchTerm as string, 'i') },
                { temperament: new RegExp(searchTerm as string, 'i') }
            ];
        }
        
        if (selectedFilter) {
            query.temperament = selectedFilter;
        }
        
        const [dogBreeds, total] = await Promise.all([
            DogBreed.find(query).skip(skip).limit(limitNumber),
            DogBreed.countDocuments(query)
        ]);
        
        const totalPages = Math.ceil(total / limitNumber);
        
        res.status(200).json({
            dogBreeds,
            totalPages
        });
    } catch (err) {
        console.error('Error al obtener las razas de perro:', err);
        res.status(500).json({ message: 'Error al obtener las razas de perro', error: err });
    }
};

export const getDogBreedById = async (req: Request, res: Response) => {
    try {
        const dogBreed = await DogBreed.findById(req.params.id);
        if (!dogBreed) {
            return res.status(404).json({ message: 'Raza de perro no encontrada' });
        }
        res.status(200).json(dogBreed);
    } catch (err) {
        console.error('Error al obtener la raza de perro por ID:', err);
        res.status(500).json({ message: 'Error al obtener la raza de perro por ID', error: err });
    }
};

export const updateDogBreed = async (req: Request, res: Response) => {
    try {
        const { name, image, temperament, lifeExpectancy, weight, height } = req.body;

        if (!name || !image || !temperament || !lifeExpectancy || !weight || !height) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const updatedDogBreed = await DogBreed.findByIdAndUpdate(
            req.params.id,
            { name, image, temperament, lifeExpectancy, weight, height },
            { new: true }  // Devolver el documento actualizado
        );

        if (!updatedDogBreed) {
            return res.status(404).json({ message: 'Raza de perro no encontrada' });
        }

        res.status(200).json(updatedDogBreed);
    } catch (err) {
        console.error('Error al actualizar la raza de perro:', err);
        res.status(500).json({ message: 'Error al actualizar la raza de perro', error: err });
    }
};

export const deleteDogBreed = async (req: Request, res: Response) => {
    try {
        const deletedDogBreed = await DogBreed.findByIdAndDelete(req.params.id);
        if (!deletedDogBreed) {
            return res.status(404).json({ message: 'Raza de perro no encontrada' });
        }
        res.status(200).json({ message: 'Raza de perro eliminada exitosamente' });
    } catch (err) {
        console.error('Error al eliminar la raza de perro:', err);
        res.status(500).json({ message: 'Error al eliminar la raza de perro', error: err });
    }
};


