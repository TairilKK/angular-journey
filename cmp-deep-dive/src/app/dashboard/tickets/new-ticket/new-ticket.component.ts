import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, textInput: string) {
    console.log('Title:', titleInput);
    console.log('Text:', textInput);

    // this.form!.nativeElement.reset();
    this.form()!.nativeElement.reset();
  }
}
