import { Component, inject } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title: string;
  heroes: Hero[];
  heroService: HeroesService = inject(HeroesService);
  constructor(
    private msgService: MessageService
  ) {
    this.title = 'HeroesComponent';
    this.heroes = [];

    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getAllHeroes(this.title);
    // Lesson:12 Add "Observable" method in service
    this.heroService.getAllHeroes(this.title)
      .subscribe(res => {
        console.log('BM Hero Info: ', JSON.stringify(res));
        this.heroes = res;
      });
  }

  // Lesson:10
  add(_name: string, _val: string): void {
    console.log('_rating: ', _val);
    _name = _name.trim();
    const _rating: number = Number(_val) ? Number(_val) : 1;
    // this.heroService.addHero(_name, _rating);
    // Lesson:12 Add "Observable" method in service
    this.heroService.addHero(_name, _rating)
      .subscribe((res: boolean) => {
        if (res) {
          this.msgService.add([this.title], 'Show new Hero information at bottom');
        }
      })
  }
  delete(_id: number): void {
    // this.heroes = this.heroService.deleteHeroById(_id);
    // Lesson:12 Add "Observable" method in service
    this.heroService.deleteHeroById(_id)
      .subscribe((res: boolean) => {
        if (res) {
          this.getHeroes();
          this.msgService.add([this.title], 'Show Update Hero List Successfully');
        }
      })
  }
}
