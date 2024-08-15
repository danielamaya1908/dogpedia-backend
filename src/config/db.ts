import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dogpedia');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso con un código de error
    }
};

export default connectDB;
