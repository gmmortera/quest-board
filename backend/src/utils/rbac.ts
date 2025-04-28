import { FastifyReply, FastifyRequest } from "fastify"

enum Role {
  commisioner = "COMMISSIONER",
  contractor = "CONTRACTOR"
}

export default async (request: FastifyRequest, response: FastifyReply) => {
  console.log("Entry")
  console.log(request.user.role)
  if (request.user.role !== Role.commisioner) {
    return response.code(401).send()
  }
  console.log("Middleware failed")

  return
}