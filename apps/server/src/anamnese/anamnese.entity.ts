import { Usuario } from "src/usuario/usuario.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { AtividadeFisica, Genero, Objetivo } from "./anamnese.enum"

@Entity()
export class Anamnese {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "date" })
  dataNasc: Date

  @Column({ type: "text" })
  genero: Genero

  @Column({ type: "float" })
  pesoAtual: number

  @Column({ type: "float" })
  altura: number

  @Column({ type: "text" })
  objetivo: Objetivo

  @Column({ type: "text" })
  atividadeFisica: AtividadeFisica

  @Column({ type: "text", default: () => "CURRENT_TIMESTAMP" })
  feitoEm: Date

  @ManyToOne(() => Usuario, (usuario) => usuario.anamnese)
  usuario: Usuario
}
