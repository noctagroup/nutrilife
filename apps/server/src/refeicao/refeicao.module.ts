import { Module } from '@nestjs/common';
import { RefeicaoController } from './refeicao.controller';
import { RefeicaoService } from './refeicao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefeicaoAlimento } from './refeicaoAlimento.entity';
import { Refeicao } from './refeicao.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Refeicao, RefeicaoAlimento, Usuario]), UsuarioModule, AuthGuard],
  controllers: [RefeicaoController],
  providers: [RefeicaoService, UsuarioService]
})
export class RefeicaoModule {}
