import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Alimento } from "src/alimentos/alimentos.entity" // Import Alimento entity
import { Usuario } from "src/usuario/usuario.entity"
import { Repository } from "typeorm"

import { CreateRefeicaoDto } from "./DTOs/criaRefeicao.dto"
import { Refeicao } from "./refeicao.entity"
import { RefeicaoAlimento } from "./refeicaoAlimento.entity"

@Injectable()
export class RefeicaoService {
  constructor(
    @InjectRepository(Refeicao)
    private readonly refeicaoRepository: Repository<Refeicao>,
    @InjectRepository(RefeicaoAlimento)
    private readonly refeicaoAlimentoRepository: Repository<RefeicaoAlimento>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Alimento) // Inject Alimento repository
    private readonly alimentoRepository: Repository<Alimento>
  ) {}

  async createRefeicao(dto: CreateRefeicaoDto): Promise<Refeicao> {
    const usuario = await this.usuarioRepository.findOne({ where: { id: dto.idUsuario } })
    if (!usuario) {
      throw new Error("User not found")
    }

    const refeicao = new Refeicao()
    refeicao.horaRefeicao = new Date(dto.time)
    refeicao.tipoRefeicao = dto.type
    refeicao.usuario = usuario

    const alimentos = await Promise.all(
      dto.alimentos.map(async (alimentoDTO) => {
        const alimento = await this.alimentoRepository.findOne({
          where: { id: alimentoDTO.alimentoId }
        })

        if (!alimento) {
          throw new Error(`Alimento with id ${alimentoDTO.alimentoId} not found`)
        }

        const refeicaoAlimento = new RefeicaoAlimento()
        refeicaoAlimento.alimento = alimento
        refeicaoAlimento.quantidade = alimentoDTO.quantity
        refeicaoAlimento.refeicao = refeicao

        return refeicaoAlimento
      })
    )

    refeicao.alimentos = await this.refeicaoAlimentoRepository.save(alimentos)
    return await this.refeicaoRepository.save(refeicao)
  }

  async getRefeicaoById(id: number): Promise<Refeicao> {
    return this.refeicaoRepository.findOne({
      where: { id },
      relations: ["alimentos", "alimentos.alimento", "usuario"]
    })
  }
}
