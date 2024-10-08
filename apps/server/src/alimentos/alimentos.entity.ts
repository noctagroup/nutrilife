import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Alimento {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  @Index()
  alimento: string

  @Column({ type: "int", nullable: true })
  calorias: number

  @Column({ type: "float", nullable: true })
  proteinas: number

  @Column({ type: "float", nullable: true })
  gordura: number

  @Column({ type: "float", nullable: true })
  colesterol: number

  @Column({ type: "float", nullable: true })
  carboidratos: number

  @Column({ type: "float", nullable: true })
  fibras: number

  @Column({ type: "float", nullable: true })
  calcio: number

  @Column({ type: "float", nullable: true })
  magnesio: number

  @Column({ type: "float", nullable: true })
  fosforo: number

  @Column({ type: "float", nullable: true })
  ferro: number

  @Column({ type: "float", nullable: true })
  sodio: number

  @Column({ type: "float", nullable: true })
  potassio: number

  @Column({ type: "float", nullable: true })
  cobre: number

  @Column({ type: "float", nullable: true })
  zinco: number

  @Column({ nullable: false, length: 100 })
  grupoAlimentar: string
}
