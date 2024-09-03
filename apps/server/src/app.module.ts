import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './alimentos/alimentos.entity';
import { AlimentosModule } from './alimentos/alimentos.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'database.sqlite',
        entities: [Alimento, Usuario],
        synchronize: true,
      }),
    AlimentosModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
