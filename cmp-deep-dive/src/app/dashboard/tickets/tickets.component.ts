import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './tickets.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  onAdd(ticketData: { title: string; text: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(36),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }
  tickets: Ticket[] = [];
}
