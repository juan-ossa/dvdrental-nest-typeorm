import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from 'src/entities/Actor';
import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private actorRepository: Repository<Actor>,
  ) { }

  // create(createActorDto: CreateActorDto) {
  //   return 'This action adds a new actor';
  // }

  async create(actorDto: CreateActorDto): Promise<void> {
    // todo = new Country();
    // todo.name = "Me and Bears";
    // todo.iscomplete = false;

    // let photoRepository = connection.getRepository(Photo);

    console.log('argumentos ', actorDto);

    await this.actorRepository.save(actorDto);
    console.log('Task has been saved');

    // let savedPhotos = await this.countryRepository.find();
    // console.log("All Task from the db: ", savedPhotos);
  }


  findAll(): Promise<Actor[]> {
    return this.actorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
