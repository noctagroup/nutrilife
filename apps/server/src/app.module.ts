import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './alimentos/alimentos.entity';
import { AlimentosModule } from './alimentos/alimentos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'database.sqlite',
        entities: [Alimento],
        synchronize: true,
      }),
    AlimentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
