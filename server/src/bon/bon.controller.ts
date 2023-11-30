import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Put,
    Param,
    ParseIntPipe,
    Delete,
    ValidationPipe,
    Req,
    UseGuards,
  } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { BonsService } from './bon.service';
import { CreateBonDto } from './dto/create-bon.dto';

@Controller('bon')
@ApiTags('BonBagages')
@ApiSecurity('JWT-auth')

export class BonController {
    constructor(private readonly bonService: BonsService) {}
   //id params user. 

    @Post('/bons/:id')

    create(@Param('id', ParseIntPipe) id: number,@Body() createBonDto: CreateBonDto) {
      return this.bonService.create(id,createBonDto);
    }
    @Get()
  findAll(@Req() req) {
    return this.bonService.findBons();
  }
  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,@Body() createBonDto: CreateBonDto  ) {
    await this.bonService.updateBon(id, createBonDto);
  }
  @Delete(':id')

  remove(@Param('id') id: number, @Req() req) {
    return this.bonService.remove(id);

  }

}