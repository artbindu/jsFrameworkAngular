import { Component, inject } from '@angular/core';
// Lesson:5 Dashboard services
import { Hero } from 'src/app/interfaces/hero';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title: string;
  topHeroes: Hero[];
  topHeroIndex: number = 5;
  heroServices: HeroesService = inject(HeroesService);
  constructor() {
    this.title = 'DashboardComponent';
    this.topHeroes = [];

    this.getTopHeroes();
  }

  getTopHeroes(): void {
    // this.topHeroes = this.heroServices.getAllHeroes(this.title)
    //     ?.sort((a,b) => b.rating-a.rating)
    //     ?.slice(0, 5);
    // Lesson:12 Add "Observable" method in service
    this.heroServices.getAllHeroes(this.title)
          .subscribe((res: Hero[]) => {
            this.topHeroes = res?.sort((a ,b) => b.rating - a.rating)
                            ?.slice(0,this.topHeroIndex);
          });
  }
}
