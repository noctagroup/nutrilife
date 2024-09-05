import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { Alimento } from "./alimentos/alimentos.entity"
import { AlimentosModule } from "./alimentos/alimentos.module"
import { Anamnese } from "./anamnese/anamnese.entity"
import { AnamneseModule } from "./anamnese/anamnese.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { Usuario } from "./usuario/usuario.entity"
import { UsuarioModule } from "./usuario/usuario.module"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database.sqlite",
      entities: [Alimento, Usuario, Anamnese],
      synchronize: true
    }),
    AlimentosModule,
    AuthModule,
    UsuarioModule,
    AuthModule,
    AnamneseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
