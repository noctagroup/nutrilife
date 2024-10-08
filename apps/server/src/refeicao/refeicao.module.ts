import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Alimento } from "src/alimentos/alimentos.entity"
import { AuthGuard } from "src/auth/auth.guard"
import { Usuario } from "src/usuario/usuario.entity"
import { UsuarioModule } from "src/usuario/usuario.module"
import { UsuarioService } from "src/usuario/usuario.service"

import { RefeicaoController } from "./refeicao.controller"
import { Refeicao } from "./refeicao.entity"
import { RefeicaoService } from "./refeicao.service"
import { RefeicaoAlimento } from "./refeicaoAlimento.entity"

@Module({
  imports: [
    TypeOrmModule.forFeature([Refeicao, RefeicaoAlimento, Usuario, Alimento]),
    UsuarioModule
  ],
  controllers: [RefeicaoController],
  providers: [RefeicaoService, UsuarioService, AuthGuard]
})
export class RefeicaoModule {}
