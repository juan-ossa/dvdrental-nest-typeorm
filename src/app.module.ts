import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './components/country/country.module';
import { ActorModule } from './components/actor/actor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'juan',
      password: 'juan',
      database: 'testorm',
      entities: ['dist/entities/**/*.js'],
      synchronize: false,
    }),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'ec2-3-211-221-xxxxxx',
    //   port: 5432,
    //   username: 'xxxxxxx',
    //   password:
    //     'xxxxxxxxx',
    //   database: 'XXXXX',
    //   logging: false,
    //   entities: ['dist/entities/**/*.js'],
    //   synchronize: false,
    // }),

    CountryModule,

    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
