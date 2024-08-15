import axios from 'axios';

// Clave API proporcionada
const API_KEY = 'live_iJzSEKvlHObcW6689LY7yT97Mr8uS7CpTnIUMCKS0oQL6pDysLIehU6ar1NC8FKy';
const API_URL = 'https://api.thedogapi.com/v1/breeds'; // URL para obtener las razas de perros

export const fetchDogBreedsFromApi = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener razas de la API:', error);
        throw error;
    }
};
