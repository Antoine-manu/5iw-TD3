import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Character } from './character.model';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character)
    private characterModel: typeof Character,
  ) {}

  async create(characterData: any): Promise<Character> {
    return this.characterModel.create(characterData);
  }

  async findAll(): Promise<Character[]> {
    return this.characterModel.findAll();
  }

  async findOne(id: number): Promise<Character> {
    const character = await this.characterModel.findByPk(id);
    if (!character) {
      throw new NotFoundException('Character not found');
    }
    return character;
  }

  async update(id: number, characterData: any): Promise<Character> {
    const character = await this.findOne(id);
    return character.update(characterData);
  }

  async remove(id: number): Promise<void> {
    const character = await this.findOne(id);
    await character.destroy();
  }
}
