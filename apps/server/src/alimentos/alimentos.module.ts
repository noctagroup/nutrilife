import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './alimentos.entity';
import { AlimentosService } from './alimentos.service';
import { AlimentosController } from './alimentos.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Alimento])],
  providers: [AlimentosService],
  controllers: [AlimentosController],
})
export class AlimentosModule {}
