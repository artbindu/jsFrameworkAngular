import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero';
import { HeroesService } from 'src/app/services/heroes.service';

// Lesson:09 - Add Feature to update HeroDetails
import { Location } from '@angular/common';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  title: string;

  id: number;
  hero: Hero | undefined;
  heroService: HeroesService = inject(HeroesService);
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private msgService: MessageService
  ) {
    this.title = 'HeroDetailsComponent';

    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.getHero(this.id);
  }

  getHero(_id: number):void {
    // Lesson:12 Add "Observable" method in service
    // this.hero = this.heroService.getHeroById(_id);
    this.heroService.getHeroById(_id)
        .subscribe((res: Hero|undefined) => this.hero = res);
  }

  // Lesson:09
  goBack(): void {
    this.location.back();
    this.msgService.add([this.title], 'Return to Previous Component');
  }
  save(): void {
    if(this.hero) {
      // const res: boolean = this.heroService.updateHero(this.hero);
      // if(res) this.goBack();
      // Lesson:12 - Add Observable/off
      this.heroService.updateHero(this.hero, this.title)
        .subscribe((res:boolean) => {
          if(res) this.goBack();
        });
    }
  }
}
