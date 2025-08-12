import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const httpClientSubscribtion = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((responseData) => {
          return responseData.places;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching available places. Try again later.'
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
  onSelectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
