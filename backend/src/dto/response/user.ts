import { Role, User } from "~/prisma"

export class UserDtoResponse {
  id: string
  name: string
  role: Role

  constructor(user: User) {
    this.id = user.id
    this.name = user.name
    this.role = user.role
  }
}
