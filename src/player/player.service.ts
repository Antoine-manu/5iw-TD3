import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player)
    private playerModel: typeof Player,
  ) {}

  async create(playerData: any): Promise<Player> {
    return this.playerModel.create(playerData);
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.findAll();
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playerModel.findByPk(id);
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    return player;
  }

  async update(id: number, playerData: any): Promise<Player> {
    const player = await this.findOne(id);
    return player.update(playerData);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await player.destroy();
  }
}
