import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CharacterController } from './character/character.controller';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { CharacterService } from './character/character.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, CharacterController, PlayerController],
  providers: [AppService, CharacterService, PlayerService],
})
export class AppModule {}
