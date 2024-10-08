import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.model';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() playerData: any): Promise<Player> {
    return this.playerService.create(playerData);
  }

  @Get()
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() playerData: any): Promise<Player> {
    return this.playerService.update(id, playerData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.playerService.remove(id);
  }
}
