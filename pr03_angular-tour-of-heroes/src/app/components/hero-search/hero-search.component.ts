import { Component, inject } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  title: string;
  heroes: Hero[] = [];
  heroService: HeroesService = inject(HeroesService);
  searchResult: Hero[];
  constructor() {
    this.title = 'HeroSearchComponent';
    this.getAllHeroes();
    this.searchResult = [];
  }

  getAllHeroes(): void {
    // Lesson:12 Add "Observable" method in service
    // this.heroes = this.heroService.getAllHeroes();
    this.heroService.getAllHeroes(this.title)
        .subscribe((ele: Hero[]) => this.heroes = ele);
  }

  search(term: string): void {
    term = term.trim().toLowerCase()
    if (term) {
      this.searchResult = this.heroes.filter(ele => ele.name.toLowerCase().includes(term));
    } else {
      this.searchResult = [];
    }
  }
}
