import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input<string>();
  labelFor = input<string>();
  private element = inject(ElementRef);
  @ContentChild('input') private content?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onClick() {
    // Handle click event
    console.log('Control clicked');
    console.log('Element:', this.element);
    console.log('Content:', this.content);
  }
}
