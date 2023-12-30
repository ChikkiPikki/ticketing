import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
  // tight coupling with the structure name and the data
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
