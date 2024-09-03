import { IsEmail, IsString, MaxLength } from "class-validator";

export class CriaUsuarioDTO {
  @IsString()
  @MaxLength(100)
  nome: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MaxLength(50)
  senha: string;
}