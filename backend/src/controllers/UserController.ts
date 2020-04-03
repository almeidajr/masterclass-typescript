import { Request, Response, response } from 'express';

import EmailService from '../services/EmailService'

const users = [
  { name: 'José', email: 'jose@mail.com'}
];

export default {
  async index(req: Request, res: Response) {
    return res.send(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: 'José',
        email: 'jose@email.com'
      },
      message: {
        subject: 'Welcome to the system',
        body: 'Be welcome!'
      }
    });

    res.send();
  }
};
