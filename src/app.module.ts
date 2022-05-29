import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './components/country/country.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'juan',
    //   password: 'juan',
    //   database: 'testorm',
    //   entities: ['dist/entities/**/*.js'],
    //   synchronize: false,
    // }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-3-211-221-185.compute-1.amazonaws.com',
      port: 5432,
      username: 'coigjfmyvjvwex',
      password:
        '4edc0c7c180a5d4c6f320aab8183ffbdaf4b766f918c161d215eb764f4f3e925',
      database: 'd6l7qtjpno9p65',
      logging: false,
      entities: ['dist/entities/**/*.js'],
      synchronize: false,
    }),

    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
