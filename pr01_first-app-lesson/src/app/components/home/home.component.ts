import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from 'src/app/components/housing-location/housing-location.component';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
          <section>
              <form>
                <input type="text" placeholder="Filter by city" #filter>
                <button class="primary" type="button"
                  (click)="filterResult(filter.value)">Search</button>
              </form>
          </section>
          <section class="results" *ngIf="filterLocationListByCity.length">
              <!-- <app-housing-location 
                *ngFor="let ele of housingLocationList"
                [housingLocation]="ele"
              >
              </app-housing-location> -->
              <!-- add search: Lesson-13 -->
              <app-housing-location 
                *ngFor="let ele of filterLocationListByCity"
                [housingLocation]="ele"
              >
              </app-housing-location>
          </section>
          <section class="no-results" *ngIf="!filterLocationListByCity.length">
              No Data Found
          </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  // add search: Lesson-13
  filterLocationListByCity: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations()
        .then((res: HousingLocation[]) => {
            this.housingLocationList = res;
            this.filterLocationListByCity = this.housingLocationList;
        });
  }

  // add search: Lesson-13
  filterResult(txt: string) {
    if (!txt.trim()) {
      this.filterLocationListByCity = this.housingLocationList;
    } else {
      this.filterLocationListByCity = this.housingLocationList.filter(ele =>
        ele?.city.toLocaleLowerCase().includes(txt.trim().toLocaleLowerCase())
      );
    }
  }
}
