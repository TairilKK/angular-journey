import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const httpClientSubscribtion = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((responseData) => {
          return responseData.places;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching your favorite places. Try again later.'
              )
          );
        })
      )
      .subscribe({
        next: (responseData) => {
          this.places.set(responseData);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      httpClientSubscribtion.unsubscribe();
    });
  }
}
