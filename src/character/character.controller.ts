import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.model';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() characterData: any): Promise<Character> {
    return this.characterService.create(characterData);
  }

  @Get()
  findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Character> {
    return this.characterService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() characterData: any): Promise<Character> {
    return this.characterService.update(id, characterData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.characterService.remove(id);
  }
}
