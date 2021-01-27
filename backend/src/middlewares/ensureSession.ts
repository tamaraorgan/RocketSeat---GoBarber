import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureSession(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  /* Validação do Token JWT */
  const authHeader = request.headers.authorization; // pega o token que está no header

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  } // se o token não existir dá a msg

  const [, token] = authHeader.split(' '); // quando não queremos uma variavel da destruturação, deixa somente a virgula, no caso a variavel seria o tipo "Bearer" e o split ele divide a variável

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    // se o token exitir e foi validado ai a aplicação continua com o next

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
