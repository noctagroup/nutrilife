import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Usuario } from "src/usuario/usuario.entity"
import { Repository } from "typeorm"

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
}
