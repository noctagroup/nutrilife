import { IsEmail, IsString } from "class-validator"

export class LoginDTO {
  @IsEmail()
  email: string

  @IsString()
  senha: string
}
