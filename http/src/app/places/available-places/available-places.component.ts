import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
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
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const httpCLientSubscribtion = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .subscribe({
        next: (responseData) => {
          this.places.set(responseData.places);
        },
      });

    this.destroyRef.onDestroy(() => {
      httpCLientSubscribtion.unsubscribe();
    });
  }
}
