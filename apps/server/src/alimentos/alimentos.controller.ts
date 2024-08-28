import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Alimento } from "./alimentos.entity";
import { AlimentosService } from "./alimentos.service";
import { AlimentoDTO } from "./DTOs/alimento.dto";

@Controller("/alimentos")
export class AlimentosController {
  constructor(private readonly alimentosService: AlimentosService) {}

  @Get()
  getAlimentos(@Query('nomeAlimento') nomeAlimento: string | undefined ): Promise<Array<Alimento>> {
    return this.alimentosService.getAlimentos(nomeAlimento);
  }

  @Post()
  createAlimento(@Body() createAlimentoDTO: AlimentoDTO): Promise<Alimento> {
    return this.alimentosService.insertAlimentos(createAlimentoDTO);
  }

  @Put("/:id")
  updateAlimento(@Body() updateAlimentoDTO: AlimentoDTO, @Param("id") id: number): Promise<Alimento> {
    return this.alimentosService.updateAlimento(id, updateAlimentoDTO);
  }

  @Delete("/:id")
  deleteAlimento(@Param("id") id: number): Promise<Alimento> {
    return this.alimentosService.removeAlimento(id);
  }
} 