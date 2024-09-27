import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common"

import { AuthService } from "./auth.service"
import { LoginDTO } from "./DTOs/login.dto"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() loginDTO: LoginDTO): Promise<Record<string, unknown>> {
    return await this.authService.login(loginDTO.email, loginDTO.senha)
  }
}
