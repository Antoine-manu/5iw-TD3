import { Sequelize } from 'sequelize-typescript';
import { Character } from 'src/character/character.model';
import { Player } from 'src/player/player.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: '5iw-nest',
        password: 'root',
        database: '5iw-nest',
      });
      sequelize.addModels([Player, Character]);
      await sequelize.sync();
      return sequelize;
    },
  },
];