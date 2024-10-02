import { Alimento } from "src/alimentos/alimentos.entity"
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

import { Refeicao } from "./refeicao.entity"

@Entity()
export class RefeicaoAlimento {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Refeicao, (refeicao) => refeicao.alimentos)
  refeicao: Refeicao

  @ManyToOne(() => Alimento)
  alimento: Alimento

  @Column("float")
  quantidade: number
}
