import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { envs } from '../envs';

export class JwtAdapter {
  static async generateToken(
    payload: JwtPayload,
    duration: string = '2h'
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        envs.jwtSecret as Secret,
        { expiresIn: duration as jwt.SignOptions['expiresIn'] },
        (err, token) => {
          if (err) return resolve(null);
          resolve(token!);
        }
      );
    });
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, envs.jwtSecret, (err, decoded) => {
        if (err) return resolve(null);
        resolve(decoded as T);
      });
    });
  }
}
