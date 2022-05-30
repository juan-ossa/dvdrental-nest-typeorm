import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Country } from 'src/entities/Country';
import { CountryService } from './country.service';

@ApiTags(' Paises')
@Controller('api/country')
export class CountryController {
  constructor(private countryService: CountryService) { }

  @Get()
  async getCountries(): Promise<{}> {
    console.log('pasa por list country sin param');
    // console.log("const Country Controller "+this.connection.name);
    // const users =  await this.connection.manager.find("Country");
    // const users =  await getConnection(NOMBRECONECCION).getRepository(Country).find();
    // const users =  await this.connection.getRepository(Country).find();
    // return res.send(users);
    // if (users)
    //     res.json({ error: null, data: users });
    // else
    //     res.json({ error: 'no hay paises ' });
    const countries = await this.countryService.findAll();
    if (countries) return { error: null, data: countries };
    else return { error: 'no hay paises ' };
  }

  @Get(':id')
  getCountry(@Param('id') id: string) {
    return this.countryService.findOne(parseInt(id));
  }

  @Post()
  // createTask(@Body() task: Country) {
  createTask(@Body() task) {
    console.log('aqui ..');
    console.log(task);
    return this.countryService.create(task);
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
