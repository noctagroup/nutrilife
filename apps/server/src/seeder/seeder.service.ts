// src/seeder/seeder.service.ts
import { Injectable, OnModuleInit } from "@nestjs/common"
import * as fs from "fs"
import * as path from "path"
import { DataSource } from "typeorm"

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    await this.seed()
  }

  async seed() {
    const sqlFilePath = path.join("/media/abreu/abreu/faculdade/nutrilife/apps/server", "dump.sql")
    const sql = fs.readFileSync(sqlFilePath, "utf-8")

    const sqlCommands = sql
      .split(";")
      .map((command) => command.trim())
      .filter((command) => command.length > 0)

    for (const command of sqlCommands) {
      console.log(command)
      await this.dataSource.query(command)
    }

    console.log("Database seeded successfully from SQL file.")
  }
}
