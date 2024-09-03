import { IsEmail, IsString, MaxLength } from "class-validator"

export class LoginUsuarioDTO {
  @IsEmail()
  @MaxLength(100)
  email: string

  @IsString()
  @MaxLength(50)
  senha: string
}
