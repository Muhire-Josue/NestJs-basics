import { Controller, Get, Param } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }
}
