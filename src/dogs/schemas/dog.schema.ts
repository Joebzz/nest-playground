import { Schema } from 'mongoose';

export const DogSchema = new Schema(
  {
    id: {
      type: String,
      index: true,
      unique: true
    },
    name: String,
    age: Number,
    breed: String,
  },
  {
    autoIndex: true
  }
);
