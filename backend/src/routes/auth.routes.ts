import { Router } from 'express';
import { AuthService, EmailService } from '../services';
import { envs } from '../config/envs';
import { AuthController } from '../controllers/auth.controller';
import { RateLimiter } from '../config/rate-limiter';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const emailService = new EmailService(
      envs.mailerService,
      envs.mailerEmail,
      envs.mailerSecretKey,
      envs.sendEmail
    );
    const authService = new AuthService(emailService);

    const controller = new AuthController(authService);

    router.use(RateLimiter.limiter());

    router.post('/register', controller.registerUser);
    router.post('/login', controller.loginUser);

    return router;
  }
}
