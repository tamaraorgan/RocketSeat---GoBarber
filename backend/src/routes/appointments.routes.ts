import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureSession from '../middlewares/ensureSession';

const appointmentsRoutes = Router();

appointmentsRoutes.use(ensureSession); // como todas as rotas precisam de autenticação então usa o .use

appointmentsRoutes.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository); // instanciando a classe AppointmentsRepository;
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
}); // rota para listar

appointmentsRoutes.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date); // converter em hora cheia

  const CreateAppointment = new CreateAppointmentService();

  const appointment = await CreateAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment); // retorna o appointment
}); // rota para crear

export default appointmentsRoutes;
