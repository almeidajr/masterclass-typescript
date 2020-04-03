interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

// DTO: Data Transfer Object
interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

export default class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email sent to ${to.name}: ${message.subject}`);
  }
}
