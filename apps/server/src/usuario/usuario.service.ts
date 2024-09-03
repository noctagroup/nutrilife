import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CriaUsuarioDTO } from './DTOs/criaUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>
  ) {}

  // Metodo para criar um usuario novo
  async criaUsuario(usuario: CriaUsuarioDTO): Promise<Usuario> {
    usuario.senha = await bcrypt.hash(usuario.senha, 10);
    const novoUsuario = this.repository.create(usuario);
    const usuarioSalvo = await this.repository.save(novoUsuario);

    // Remover a senha do objeto antes de retornar
    const { senha, ...resultadoSemSenha } = usuarioSalvo;
    return resultadoSemSenha as Usuario;
  }
}
