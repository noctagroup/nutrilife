import { Alimento } from "src/alimentos/alimentos.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { Refeicao } from "./refeicao.entity"

@Entity()
export class RefeicaoAlimento {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Refeicao, (refeicao) => refeicao.alimentos, { onDelete: "CASCADE" })
  refeicao: Refeicao

  @ManyToOne(() => Alimento)
  alimento: Alimento

  @Column("float")
  quantidade: number
}
