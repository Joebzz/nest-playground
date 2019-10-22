import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Dog } from './interfaces/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog>) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return await createdDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return await this.dogModel.find().exec();
  }

  async findOneById(id: string): Promise<Dog> {
    return await this.dogModel.findOne({id}).exec();
  }
}
