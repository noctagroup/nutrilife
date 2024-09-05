import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcryptjs"
import { UsuarioService } from "src/usuario/usuario.service"

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async login(email: string, senha: string): Promise<{ acess_token: string }> {
    const usuario = await this.usuarioService.buscaUsuarioEmail(email)
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const payload = { sub: usuario.id, email: usuario.email }
      return {
        acess_token: await this.jwtService.signAsync(payload)
      }
    } else {
      throw new UnauthorizedException()
    }
  }
}
