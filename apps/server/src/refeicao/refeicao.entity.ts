import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { RefeicaoAlimento } from "./refeicaoAlimento.entity";
import { TipoRefeicao } from "./tipoRefeicao.enum";
import { Usuario } from "src/usuario/usuario.entity";

@Entity()
export class Refeicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  horaRefeicao: Date;

  @Column({  
    type: "enum",
    enum: TipoRefeicao,
    default: TipoRefeicao.CAFEDAMANHA 
    })
  tipoRefeicao: TipoRefeicao;

  @OneToMany(() => RefeicaoAlimento, refeicaoAlimento => refeicaoAlimento.refeicao, {
    cascade: true,
  })
  alimentos: RefeicaoAlimento[];

  @OneToOne(() => Usuario, usuario => usuario, {
    cascade: true
  })
  usuario: Usuario;
}
