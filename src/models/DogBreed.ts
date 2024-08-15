import mongoose, { Document, Schema } from 'mongoose';

interface IDogBreed extends Document {
    name: string;
    image: string;
    temperament: string;
    lifeExpectancy: string;
    weight: string;
    height: string;
}

const dogBreedSchema: Schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    temperament: { type: String, required: true },
    lifeExpectancy: { type: String, required: true },
    weight: { type: String, required: true },
    height: { type: String, required: true }
});

const DogBreed = mongoose.model<IDogBreed>('DogBreed', dogBreedSchema);

export default DogBreed;
