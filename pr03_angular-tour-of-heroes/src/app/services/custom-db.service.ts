import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/interfaces/hero';

@Injectable({
  providedIn: 'root'
})

// Tutorial Learning: "angular-in-memory-web-api"
// https://blog.logrocket.com/angular-in-memory-web-api-tutorial-mocking-crud-apis-in-angular/
export class CustomDbService implements InMemoryDbService {
  defaultHeroInfo: Hero[] = [
    { id: 12, name: 'Dr. Nice', rating: 8 },
    { id: 13, name: 'Bombasto', rating: 5 },
    { id: 14, name: 'Celeritas', rating: 4 },
    { id: 15, name: 'Magneta', rating: 3 },
    { id: 16, name: 'RubberMan', rating: 9 },
    { id: 17, name: 'Dynama', rating: 1 },
    { id: 18, name: 'Dr. IQ', rating: 2 },
    { id: 19, name: 'Magma', rating: 7 },
    { id: 20, name: 'Tornado', rating: 8 }
  ];

  constructor() { }

  createDb() {
    // let _heros: Hero[] = this.defaultHeroInfo;
    let _heros: Hero[] = [
      { id: 12, name: 'Dr. Nice', rating: 8 },
      { id: 13, name: 'Bombasto', rating: 5 },
      { id: 14, name: 'Celeritas', rating: 4 },
      { id: 15, name: 'Magneta', rating: 3 },
      { id: 16, name: 'RubberMan', rating: 9 },
      { id: 17, name: 'Dynama', rating: 1 },
      { id: 18, name: 'Dr. IQ', rating: 2 },
      { id: 19, name: 'Magma', rating: 7 },
      { id: 20, name: 'Tornado', rating: 8 }
    ];
    return { _heros };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
