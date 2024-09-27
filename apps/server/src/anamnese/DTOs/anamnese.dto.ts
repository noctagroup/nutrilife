import { IsDateString, IsEnum, IsNumber } from "class-validator"

import { AtividadeFisica, Genero, Objetivo } from "../anamnese.enum"

export class CriaAnamneseDTO {
  @IsDateString()
  dataNasc: Date

  @IsEnum(Genero)
  genero: Genero

  @IsNumber()
  pesoAtual: number

  @IsNumber()
  altura: number

  @IsEnum(Objetivo)
  objetivo: Objetivo

  @IsEnum(AtividadeFisica)
  atividadeFisica: AtividadeFisica
}
