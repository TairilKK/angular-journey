import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit(): void {
    const subscribtion = interval(1000)
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val),
      });

    const subscribtionFromSignal = this.clickCount$.subscribe({
      next: (val) => `Clicked button ${this.clickCount()} times.`,
    });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
      subscribtionFromSignal.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
