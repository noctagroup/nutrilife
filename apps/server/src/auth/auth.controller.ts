import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from "@nestjs/common"

import { AuthService } from "./auth.service"
import { LoginDTO } from "./DTOs/login.dto"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() loginDTO: LoginDTO): Promise<Record<string, unknown>> {
    const usuario = await this.authService.validarUsuario(loginDTO.email, loginDTO.senha)

    if (usuario) {
      return await this.authService.login(usuario)
    } else {
      throw new UnauthorizedException()
    }
  }
}
