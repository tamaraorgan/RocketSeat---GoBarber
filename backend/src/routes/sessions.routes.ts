import { Router } from 'express';

import CreateSessionsUsersService from '../services/CreateSessionsUsersService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const sessionUser = new CreateSessionsUsersService();

  const { user, token } = await sessionUser.execute({
    email,
    password,
  }); // cria a sessão do usuário ou seja a sessão dele logado

  delete user.password; // deleta o campo do password para não ficar visivel

  return response.json({ user, token });
});

export default sessionsRoutes;
