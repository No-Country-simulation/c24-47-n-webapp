import { BcryptAdapter } from "../config/adapters/bcrypt";
import { JwtAdapter } from "../config/adapters/jwt";
import { prisma } from "../data/prisma-db";
import { LoginUserDto, RegisterUserDto } from "../dto";
import { CustomError } from "../utils/custom.error";
import { EmailService } from "./email.service";


type HashFunction = (password: string) => string;
type ConpareFunction = (password: string, hashed: string) => boolean;

export class AuthService {
  constructor(
    private readonly emailservice: EmailService,
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: ConpareFunction = BcryptAdapter.compare
  ) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    const { email, name, password } = registerUserDto;

    const existEmail = await prisma.user.findUnique({ where: { email } });

    if (existEmail) {
      throw CustomError.badRequest('Email already exists');
    }

    try {
        const hashPassword = this.hashPassword(password);
        const user = await prisma.user.create({
          data: {
            email,
            name,
            password: hashPassword,
          },
        });

        return user;

    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer(`${error}`);
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw CustomError.unauthorized('Invalid credentials');
    }

    const isMatchPassword = this.comparePassword(password, user.password);
    if (!isMatchPassword) {
      throw CustomError.unauthorized('Invalid credentials');
    }

    const token = await this.generateJWTService(user.id);

    return {
      user,
      token,
    };
  }


  private async generateJWTService(id: number) {
    const token = await JwtAdapter.generateToken({ id }, '128d');
    if (!token) {
      throw CustomError.internalServer('Error generating token');
    }
    return token;
  }


}
