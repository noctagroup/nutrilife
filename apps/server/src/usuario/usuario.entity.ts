import { Anamnese } from "src/anamnese/anamnese.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(["email"])
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  nome: string

  @Column({ length: 100 })
  sobrenome: string

  @Column({ length: 100 })
  email: string

  @Column({ length: 50 })
  senha: string

  @OneToMany(() => Anamnese, (anamnese) => anamnese.usuario)
  anamnese: Anamnese[]
}
