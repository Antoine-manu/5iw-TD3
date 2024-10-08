import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Player } from '../player/player.model';

@Table
export class Character extends Model<Character> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  health: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  strength: number;

  @ForeignKey(() => Player)
  @Column
  playerId: number;
}
