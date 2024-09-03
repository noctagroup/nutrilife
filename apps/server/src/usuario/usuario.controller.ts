import { Body, Controller, Post } from "@nestjs/common"

import { CriaUsuarioDTO } from "./DTOs/criaUsuario.dto"
import { Usuario } from "./usuario.entity"
import { UsuarioService } from "./usuario.service"

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  criaUsuario(@Body() usuario: CriaUsuarioDTO): Promise<Usuario> {
    return this.usuarioService.criaUsuario(usuario)
  }
}
