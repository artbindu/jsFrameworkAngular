import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


// for routing: Lesson-11
import { HousingService } from 'src/app/services/housing.service';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { ActivatedRoute } from '@angular/router';

// form function: Lesson-12
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
        <article>
            <img class="listing-photo" [src]="housingLocInfo?.photo"
                alt="Exterior photo of {{housingLocInfo?.name}}"/>
            <section class="listing-description">
                <h2 class="listing-heading">{{housingLocInfo?.name}}</h2>
                <p class="listing-location">{{housingLocInfo?.city}}, {{housingLocInfo?.state}}</p>
            </section>
            <section class="listing-features">
                <h2 class="section-heading">About this housing location</h2>
                <ul>
                    <li>Units available: {{housingLocInfo?.availableUnits}}</li>
                    <li>Wifi available: {{housingLocInfo?.wifi}}</li>
                    <li>Laundry available: {{housingLocInfo?.laundry}}</li>
                </ul>
            </section>

            <!-- form Function: Lesson-12 -->
            <section class="listing-apply">
                <h2 class="section-heading">Apply for Booking</h2>
                <div *ngIf="housingLocInfo?.availableUnits">
                    <form (submit)="submitApplication()" [formGroup]="applyForm">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" formControlName="firstName">

                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" formControlName="lastName">

                        <label for="email">Mail</label>
                        <input type="email" id="email" formControlName="email">

                        <button class="primary" type="submit">Apply Now</button>
                    </form>
                </div>
                <div class="no-units" *ngIf="housingLocInfo && !housingLocInfo?.availableUnits">
                      <div class="txt-data">Booking Not Available</div>
                </div>
            </section>
        </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // service related injection
  houseService: HousingService = inject(HousingService);
  housingLocInfo: HousingLocation | undefined = undefined;

  // routing related injection
  _id: number | undefined = undefined;
  route: ActivatedRoute = inject(ActivatedRoute);

  // Form Function: Lesson-12
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // fetch id from URL param
    this._id = this.route.snapshot.params['id'];
    if(this._id) {
      this.houseService.getHousingLocationById(Number(this._id))
          .then((res: HousingLocation | undefined) => {
              this.housingLocInfo = res;
          });
    }
  }

  submitApplication() {
    this.houseService.submitApplication(
      this.applyForm.value.firstName?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
