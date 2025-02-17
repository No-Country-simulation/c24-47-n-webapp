import { Validators } from "../../validators/validators";


export class LoginUserDto {

  private constructor(
    public email: string,
    public password: string,
  ) { }

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password,  } = object;

    if (!email) return ['Missing email'];
    if(!Validators.email.test(email)) return ['Invalid email'];
    if (!password) return ['Missing password'];
    if (typeof password !== 'string') return ['Invalid password'];
    if (password.length < 8) return ['Password must be at least 8 characters'];
    return [undefined, new LoginUserDto( email.toLowerCase(), password)];

  }
}
