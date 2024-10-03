import { Body, Controller, Get, Param, Post } from "@nestjs/common"

import { CreateRefeicaoDto } from "./DTOs/criaRefeicao.dto"
import { RefeicaoService } from "./refeicao.service"

@Controller("refeicao")
export class RefeicaoController {
  constructor(private readonly refeicaoService: RefeicaoService) {}

  @Post()
  async createRefeicao(@Body() createRefeicaoDto: CreateRefeicaoDto) {
    return await this.refeicaoService.createRefeicao(createRefeicaoDto)
  }

  @Get(":id")
  async getRefeicao(@Param("id") id: number) {
    return await this.refeicaoService.getRefeicaoById(id)
  }
}
