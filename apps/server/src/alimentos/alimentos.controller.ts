import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"

import { Alimento } from "./alimentos.entity"
import { AlimentosService } from "./alimentos.service"
import { AlimentoDTO } from "./DTOs/alimento.dto"

@Controller("/alimentos")
export class AlimentosController {
  constructor(private readonly alimentosService: AlimentosService) {}

  @Get()
  getAlimentos(@Query("nomeAlimento") nomeAlimento: string | undefined): Promise<Array<Alimento>> {
    return this.alimentosService.getAlimentos(nomeAlimento)
  }

  @UseGuards(AuthGuard)
  @Post()
  createAlimento(@Body() createAlimentoDTO: AlimentoDTO): Promise<Alimento> {
    return this.alimentosService.insertAlimentos(createAlimentoDTO)
  }

  @UseGuards(AuthGuard)
  @Put("/:id")
  updateAlimento(
    @Body() updateAlimentoDTO: AlimentoDTO,
    @Param("id") id: number
  ): Promise<Alimento> {
    return this.alimentosService.updateAlimento(id, updateAlimentoDTO)
  }

  @UseGuards(AuthGuard)
  @Delete("/:id")
  deleteAlimento(@Param("id") id: number): Promise<Alimento> {
    return this.alimentosService.removeAlimento(id)
  }
}
