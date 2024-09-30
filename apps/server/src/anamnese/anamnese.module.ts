import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthGuard } from "src/auth/auth.guard"
import { Usuario } from "src/usuario/usuario.entity"
import { UsuarioService } from "src/usuario/usuario.service"

import { AnamneseController } from "./anamnese.controller"
import { Anamnese } from "./anamnese.entity"
import { AnamneseService } from "./anamnese.service"

@Module({
  imports: [TypeOrmModule.forFeature([Anamnese, Usuario])],
  controllers: [AnamneseController],
  providers: [AnamneseService, AuthGuard, UsuarioService]
})
export class AnamneseModule {}
