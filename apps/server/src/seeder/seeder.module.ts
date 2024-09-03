import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { SeederService } from "./seeder.service"

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [SeederService],
  exports: [SeederService]
})
export class SeederModule {}
