import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import fjwt from "@fastify/jwt"
import "dotenv/config"

export default fp(async (fastify: FastifyInstance) => {
  fastify.register(fjwt, {
    secret: process.env.JWT_SECRET!,
    cookie: {
      cookieName: "token",
      signed: false
    }
  })

  fastify.addHook("preHandler", async (req, res) => {
    const sessionPath = req.routeOptions.url?.startsWith("/api/v1/session")
    const userPath = req.routeOptions.url?.startsWith("/api/v1/users")
    if (sessionPath || (userPath && req.method === "POST")) return
    await req.jwtVerify()
    req.user = req.user
  })
})