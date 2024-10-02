import { IsEnum, IsNotEmpty, IsString, IsArray, ValidateNested, IsNumber, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { TipoRefeicao } from '../tipoRefeicao.enum';

class RefeicaoAlimentoDTO {
  @IsNotEmpty()
  @IsNumber()
  alimentoId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class CreateRefeicaoDto {
  @IsNotEmpty()
  @IsString()
  time: string;

  @IsEnum(TipoRefeicao)
  @IsNotEmpty()
  type: TipoRefeicao;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RefeicaoAlimentoDTO)
  alimentos: RefeicaoAlimentoDTO[];

  @IsInt()
  @IsNotEmpty()
  idUsuario: number
}
