import { Controller, Get, Body, Post, Param } from '@nestjs/common';

import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogsService: DogsService) { }

    @Post()
    async create(@Body() createDogDto: CreateDogDto) {
        this.dogsService.create(createDogDto);
    }

    @Get()
    async findAll(): Promise<Dog[]> {
        return this.dogsService.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id') id: string): Promise<Dog> {
        return this.dogsService.findOneById(id);
    }
}
