import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
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
    TypeOrmModule.forFeature([Refeicao, RefeicaoAlimento, Usuario]),
    UsuarioModule,
    AuthGuard
  ],
  controllers: [RefeicaoController],
  providers: [RefeicaoService, UsuarioService]
})
export class RefeicaoModule {}
