import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  form = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('NgOnInit');
    console.log('Form Element:', this.form()!.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log('Form Element:', this.form()!.nativeElement);
  }

  onSubmit(titleInput: string, textInput: string) {
    console.log('Title:', titleInput);
    console.log('Text:', textInput);

    // this.form!.nativeElement.reset();
    this.form()!.nativeElement.reset();
  }
}
