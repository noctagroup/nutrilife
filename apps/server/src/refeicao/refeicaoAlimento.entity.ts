import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Refeicao } from "./refeicao.entity";
import { Alimento } from "src/alimentos/alimentos.entity";

@Entity()
export class RefeicaoAlimento {
  @PrimaryGeneratedColumn()
  id: number;
 
  @ManyToOne(() => Refeicao, refeicao => refeicao.alimentos)
  refeicao: Refeicao;

  @ManyToOne(() => Alimento)
  alimento: Alimento;

  @Column("float")
  quantidade: number;
}
