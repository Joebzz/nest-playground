import { Schema } from 'mongoose';

export const CatSchema = new Schema(
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
