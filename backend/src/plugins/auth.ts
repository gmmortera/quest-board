import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import fjwt from "@fastify/jwt"
import "dotenv/config"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: string; role: string }; // Define payload structure
    user: {
      id: string;
      role: string;
    };
  }
}

export default fp(async (fastify: FastifyInstance) => {
  fastify.register(fjwt, {
    secret: process.env.JWT_SECRET!,
    cookie: {
      cookieName: "token",
      signed: false
    },
    formatUser: (payload) => {
      return {
        id: payload.id,
        role: payload.role
      }
    }
  })

  fastify.addHook("preHandler", async (req, res) => {
    const sessionPath = req.routeOptions.url?.startsWith("/api/v1/session")
    const userPath = req.routeOptions.url?.startsWith("/api/v1/users")
    if (sessionPath || (userPath && req.method === "POST")) return
    await req.jwtVerify()
  })
})