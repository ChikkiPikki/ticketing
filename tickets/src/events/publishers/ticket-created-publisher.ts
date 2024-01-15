import { Publisher, Subjects, TicketCreatedEvent } from "@chikkipikki2/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
