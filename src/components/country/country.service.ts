import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entities/Country';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  findOne(id: number): Promise<Country> {
    return this.countryRepository.findOne(id);
  }

  async update(id: string, todo: Country): Promise<Country> {
    const taskToUpdate = await this.countryRepository.findOne(id);
    taskToUpdate.country = todo.country;
    await this.countryRepository.save(taskToUpdate);

    return this.countryRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const taskToRemove = await this.countryRepository.findOne(id);
    await this.countryRepository.remove(taskToRemove);
    // await this.countryRepository.delete(id);
  }

  async create(todo: Country) {
    // todo = new Country();
    // todo.name = "Me and Bears";
    // todo.iscomplete = false;

    // let photoRepository = connection.getRepository(Photo);

    await this.countryRepository.save(todo);
    console.log('Task has been saved');

    // let savedPhotos = await this.countryRepository.find();
    // console.log("All Task from the db: ", savedPhotos);
  }
}
