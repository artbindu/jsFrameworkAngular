import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from 'src/app/interfaces/housinglocation';

// Routing: Lesson-11
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink // add for Routing: Lesson-11
  ],
  template: `
        <section class="listing">
            <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
            <h2 class="listing-heading">{{ housingLocation.name }}</h2>
            <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>

            <!-- Add routing for Details Page: Lesson-11 -->
            <a [routerLink]="['/details', housingLocation.id]">View Details</a>
        </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
