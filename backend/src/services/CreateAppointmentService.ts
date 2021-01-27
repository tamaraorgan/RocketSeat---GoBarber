import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import AppError from '../errors/AppError';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date); // marca de hora em hora
    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    ); // procura por uma data

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    } // se encontrar uma data igual dá o erro

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    }); // cria o agendamento

    await appointmentsRepository.save(appointment); // salva o agendamento

    return appointment;
  }
}
export default CreateAppointmentService;
