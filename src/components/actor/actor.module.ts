import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { Actor } from 'src/entities/Actor';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  providers: [ActorService],
  controllers: [ActorController],
})
export class ActorModule {}
