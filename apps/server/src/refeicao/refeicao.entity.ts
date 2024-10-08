import { Usuario } from "src/usuario/usuario.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { RefeicaoAlimento } from "./refeicaoAlimento.entity"
import { TipoRefeicao } from "./tipoRefeicao.enum"

@Entity()
export class Refeicao {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "timestamp" })
  horaRefeicao: Date

  @Column({
    type: "enum",
    enum: TipoRefeicao,
    default: TipoRefeicao.CAFEDAMANHA
  })
  tipoRefeicao: TipoRefeicao

  @OneToMany(() => RefeicaoAlimento, (refeicaoAlimento) => refeicaoAlimento.refeicao, {
    cascade: true
  })
  alimentos: RefeicaoAlimento[]

  @ManyToOne(() => Usuario, (usuario) => usuario, {
    cascade: true
  })
  usuario: Usuario
}
