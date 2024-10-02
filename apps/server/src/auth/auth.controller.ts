import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common"

import { AuthService } from "./auth.service"
import { LoginDTO } from "./DTOs/login.dto"
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() loginDTO: LoginDTO): Promise<Record<string, unknown>> {
    return await this.authService.login(loginDTO.email, loginDTO.senha)
  }

  @UseGuards(AuthGuard)
  @Get('check')
  async isAuthenticated(): Promise<{ message: string }> {
    return { message: 'Authenticated' };
  }
}
