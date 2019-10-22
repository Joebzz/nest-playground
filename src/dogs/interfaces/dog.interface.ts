import { Document } from 'mongoose';

export interface Dog extends Document {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
