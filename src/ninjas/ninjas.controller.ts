import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }
}
