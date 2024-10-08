import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Character } from '../character/character.model';

@Table
export class Player extends Model<Player> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  pseudo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Character)
  characters: Character[];
}
