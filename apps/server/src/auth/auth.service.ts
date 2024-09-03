import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcryptjs"
import { UsuarioService } from "src/usuario/usuario.service"

import { UsuarioValidoDTO } from "./DTOs/usuarioValido.dto"

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async validarUsuario(email: string, senha: string): Promise<UsuarioValidoDTO> {
    const usuario = await this.usuarioService.buscaUsuarioEmail(email)
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      // Excluindo a senha

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...result } = usuario
      return result
    }

    return null
  }

  async login(usuario: UsuarioValidoDTO): Promise<{ access_token: Promise<string> }> {
    const payload = { nome: usuario.nome, email: usuario.email, sub: usuario.id }
    return {
      access_token: this.jwtService.signAsync(payload)
    }
  }
}
