import {
  AfterContentInit,
  Component,
  contentChild,
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
export class ControlComponent implements AfterContentInit {
  label = input<string>();
  labelFor = input<string>();
  private element = inject(ElementRef);
  // @ContentChild('input') private content?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private content =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit(): void {
    console.log('ControlComponent AfterContentInit');
    console.log('Element:', this.element);
    console.log('Content:', this.content());
  }
  onClick() {
    // Handle click event
    console.log('Control clicked');
    console.log('Element:', this.element);
    console.log('Content:', this.content());
  }
}
