import { User } from "@prisma/client";

export class ResponseUserDto {
  constructor(
    public id: number,
    public email: string,
    public name: string,
  ) { }

  static create(object: Partial<User>): [string?, ResponseUserDto?] {
    const { id, email, name } = object;

    if (!id) return ['Missing id'];
    if (typeof id !== 'number') return ['Invalid id'];
    if (!email) return ['Missing email'];
    if (typeof email !== 'string') return ['Invalid email'];
    if (!name) return ['Missing name'];
    if (typeof name !== 'string') return ['Invalid name'];
    return [undefined, new ResponseUserDto(id, email, name)];
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  }
}
