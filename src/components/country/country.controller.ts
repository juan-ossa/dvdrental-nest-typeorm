import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { Country } from 'src/entities/Country';
import { CountryService } from './country.service';

@ApiTags(' Paises')
@Controller('api/country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  // @Get()
  // async getCountries(): Promise<{}> {
  //   console.log('pasa por list country sin param');
  //   const countries = await this.countryService.findAll();
  //   if (countries) return { error: null, data: countries };
  //   else return { error: 'no hay paises ' };
  // }
  @Get()
  async getCountries() {
    console.log('pasa por list country sin param');
    const countries = await this.countryService.findAll();
    if (countries) return { error: null, data: countries };
    else return { error: 'no hay paises ' };
  }

  @Get(':id')
  getCountry(@Param('id') id: string) {
    return this.countryService.findOne(parseInt(id));
  }

  @Post()
  @HttpCode(200)
  // createTask(@Body() task: Country) {
  createTask(@Body() task) {
    console.log('aqui ..');
    console.log(task);
    return this.countryService.create(task);
    // return { data: task };
  }

  // @Post()
  // create(@Body() createActorDto: CreateActorDto) {
  //   return this.actorService.create(createActorDto);
  // }

  @Put(':id')
  updateTask(@Body() task, @Param('id') id: string) {
    console.log(task);
    console.log(id);

    return this.countryService.update(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.countryService.remove(id);
  }
}
