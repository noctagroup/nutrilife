import Fastify from "fastify"

const server = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname"
      }
    }
  }
})

const settings = {
  get PORT() {
    return parseInt(process.env.PORT!) || 8000
  },
  get HOST() {
    return process.env.HOST || "0.0.0.0"
  },

  get DB_NAME() {
    return process.env.DB_NAME || "postgres"
  },
  get DB_USER() {
    return process.env.DB_USER || "postgres"
  },
  get DB_PASSWORD() {
    return process.env.DB_PASSWORD || "postgres"
  },
  get DB_HOST() {
    return process.env.DB_HOST || "localhost"
  },
  get DB_PORT() {
    return parseInt(process.env.DB_PORT!) || 5432
  }
} as const

async function main() {
  try {
    await server.listen({ port: settings.PORT, host: settings.HOST })
  } catch (error) {
    server.log.error(error)

    process.exit(1)
  }
}

main()
