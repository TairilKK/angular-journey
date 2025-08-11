import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {
    initialValue: 0,
  });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value');
      subscriber.next({ message: 'New value' });
      timesExecuted++;
    }, 2000);
  });

  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit(): void {
    const subscribtion = interval(1000)
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val),
      });

    const subscribtionFromObservable = this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
    });

    const subscribtionFromSignal = this.clickCount$.subscribe({
      next: (val) => `Clicked button ${this.clickCount()} times.`,
    });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
      subscribtionFromSignal.unsubscribe();
      subscribtionFromObservable.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
