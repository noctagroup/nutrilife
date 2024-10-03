import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
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
    private readonly usuarioRepository: Repository<Usuario>
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

    const alimentos = dto.alimentos.map((alimentoDTO) => {
      const refeicaoAlimento = new RefeicaoAlimento()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      refeicaoAlimento.alimento = { id: alimentoDTO.alimentoId } as any
      refeicaoAlimento.quantidade = alimentoDTO.quantity
      refeicaoAlimento.refeicao = refeicao
      return refeicaoAlimento
    })

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
