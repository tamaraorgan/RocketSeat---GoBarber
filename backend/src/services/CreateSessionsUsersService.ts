import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
} // na Promise está retornando um objeto user do tipo User, pois não será apenas um User

class CreateSessionsUsersService {
  public async execute({ email, password }: Request): Promise<Response> {
    /* Verificação do email */
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } }); // está procurando por um usuário que contenha o mesmo email digitado

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    } // se não encontrou então da a msg

    /* Verificação da senha */
    const passwordMatched = await compare(password, user.password);
    // user.password é a senha criptografada
    // password é a senha que ele acabou de digitar

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    } // se não combinou então da a msg

    /* Usuário Autenticado */
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });
    return {
      user,
      token,
    };
  }
}

export default CreateSessionsUsersService;
