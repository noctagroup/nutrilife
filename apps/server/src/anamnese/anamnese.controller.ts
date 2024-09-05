import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  Req,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { AuthenticatedRequest } from "src/auth/authenticatedRequest.dto"
import { UsuarioService } from "src/usuario/usuario.service"

import { AnamneseService } from "./anamnese.service"
import { CriaAnamneseDTO } from "./DTOs/anamnese.dto"

@Controller("anamnese")
export class AnamneseController {
  constructor(
    private readonly anamneseService: AnamneseService,
    private readonly usuarioService: UsuarioService
  ) {}

  @UseGuards(AuthGuard)
  @HttpCode(201)
  @Post()
  async createAnamnese(
    @Body() criaAnamneseDTO: CriaAnamneseDTO,
    @Req() req: AuthenticatedRequest
  ): Promise<void> {
    const idUsuario = req.user.sub

    if (!idUsuario) {
      throw new UnauthorizedException()
    }

    const usuario = await this.usuarioService.buscaUsuarioId(idUsuario)

    if (!usuario) {
      throw new UnauthorizedException()
    }

    const anamneseExistente = await this.anamneseService.achaAnamnesesDuplicadas(
      criaAnamneseDTO,
      usuario
    )

    if (!anamneseExistente) {
      await this.anamneseService.insertAnamnese(usuario, criaAnamneseDTO)
    } else {
      throw new ConflictException("Uma anamnese com os mesmos dados ja foi criada.")
    }
  }
}
