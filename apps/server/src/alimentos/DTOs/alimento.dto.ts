import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator"

export class AlimentoDTO {
  @IsString()
  @MaxLength(35)
  alimento: string

  @IsNumber()
  calorias: number

  @IsNumber()
  @IsOptional()
  proteinas?: number

  @IsNumber()
  @IsOptional()
  gordura?: number

  @IsNumber()
  @IsOptional()
  colesterol?: number

  @IsNumber()
  @IsOptional()
  carboidratos?: number

  @IsNumber()
  @IsOptional()
  fibras?: number

  @IsNumber()
  @IsOptional()
  calcio?: number

  @IsNumber()
  @IsOptional()
  magnesio?: number

  @IsNumber()
  @IsOptional()
  fosforo?: number

  @IsNumber()
  @IsOptional()
  ferro?: number

  @IsNumber()
  @IsOptional()
  sodio?: number

  @IsNumber()
  @IsOptional()
  potassio?: number

  @IsNumber()
  @IsOptional()
  cobre?: number

  @IsNumber()
  @IsOptional()
  zinco?: number

  @IsString()
  @MaxLength(55)
  grupoAlimentar: string
}
