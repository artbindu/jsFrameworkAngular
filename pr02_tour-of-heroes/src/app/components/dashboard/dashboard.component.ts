import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService
  ) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((heroList: Hero[]) => {
          this.heroes = heroList.slice(0,5);
        })
  }
}
