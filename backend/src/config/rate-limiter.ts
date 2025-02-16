import rateLimit from 'express-rate-limit';


export class RateLimiter {
  static limiter() {
    return rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 5,
      message: {
        error: 'Too many requests from this IP, please try again after 15 minutes',
      },
    });
  }
}



