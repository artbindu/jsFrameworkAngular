// Lesson:03 - Hero Service & Interface
import { Injectable, inject } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { MessageService } from './message.service';
// Lesson:12 Add 'Observable Method' in service
import { Observable, of } from 'rxjs';
// Lesson:13 - Enable HTTP Service & Simulate Data Server
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  tagService: string = 'HeroesService';
  heroList: Hero[] = [];
  heroDefaultId: number = 1;
  // Lesson:07 - Add Message Component & Service
  msgService: MessageService = inject(MessageService);
  // Lesson:13 - Enable HTTP Service & Simulate Data Server
  http: HttpClient = inject(HttpClient);
  private urlList = {
    heroUrl: 'api/heroes',
    viewHeroUrl: 'api/heroes/:id'
  }

  constructor() {
    this.heroList = [
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
  }

  // getAllHeroes(tagName: string = ''): Hero[] {
  //     this.logger([tagName, this.tagService], 'Get All list of Heroes')
  //     return this.heroList;
  // }
  // Lesson:12 - Add Observable/off
  getAllHeroes(tagName: string = ''): Observable<Hero[]> {
    // this.logger([tagName, this.tagService], 'Get All list of Heroes')
    // return of(this.heroList);

    // Lesson:13 - Enable HTTP Service & Simulate Data Server
    return this.http.get<Hero[]>(this.urlList.heroUrl)
    .pipe(
      tap(_ => this.logger([], 'f')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHeroById(id: number, tagName: string = ''): Observable<Hero | undefined> {
    // Lesson:12 - Add Observable/off
    this.logger([tagName, this.tagService], `Get Hero Info of id: ${id}`);
    return of(this.heroList.find((ele: Hero) => ele.id === id));
  }

  // Lesson:07 - Add Message Component & Service
  private logger(tags: string[], txt: string): void {
    this.msgService.add(tags, txt);
  }

  // Lesson:09 - Add Feature to update HeroDetails
  updateHero(heroInfo: Hero, tag: string): Observable<boolean> {
    // Lesson:12 - Add Observable/off
    const hIndex: number | undefined = this.heroList.findIndex((ele: Hero) => ele.id === Number(heroInfo.id));
    if (!isNaN(hIndex)) {
      heroInfo.rating = this.validateRating(heroInfo.rating);
      this.heroList[hIndex] = heroInfo;
      this.logger([tag, this.tagService], `Update Hero Info (id: ${heroInfo.id}) successfully`);
      return of(true);
    } else {
      this.logger([tag, this.tagService], `Invalid hero info (id: ${heroInfo.id}`);
      return of(false);
    }
  }

  // Lesson:10
  addHero(_name: string, _rating: number): Observable<boolean> {
    const newHero: Hero = {
      // id: Math.max(... this.heroList.map(ele => ele.id)) + 1,
      id: this.autoGenerateId(this.heroList),
      name: _name,
      rating: this.validateRating(_rating)
    };
    console.log('newHero: ', newHero);
    // Lesson:12 - Add Observable/off
    if (newHero.id) {
      this.heroList.push(newHero);
      this.logger([this.tagService], `New Hero is created successfully with id ${newHero.id}`);
      return of(true);
    } else {
      this.logger([this.tagService], `Having some issue to create Hero with info ${JSON.stringify(newHero)}`);
      return of(false);
    }
  }

  deleteHeroById(_id: number): Observable<boolean> {
    // Lesson:12 - Add Observable/off
    const hIndex: number | undefined = this.heroList.findIndex((ele: Hero) => ele.id === Number(_id));
    if (!isNaN(hIndex)) {
      console.log(hIndex, this.heroList[hIndex]);
      const _heroList: Hero[] = this.heroList.slice(0, hIndex).concat(this.heroList.slice(hIndex + 1, this.heroList.length));
      this.logger([this.tagService], `Update Hero Info (id: ${_id}) successfully`);
      this.heroList = _heroList;
      return of(true);
    } else {
      this.logger([this.tagService], `Hero id: ${_id} does not match`);
      return of(false);
    }
  }

  autoGenerateId(arrList: Hero[]): number {
    const arr: number[] = arrList.map(ele => ele.id).sort((a, b) => a - b);
    function getIndex(minValue: number, maxValue: number): number {
      let midValue: number = Math.floor((maxValue + minValue) / 2);
      if (midValue === minValue || midValue === maxValue) {
        return 0;
      } else {
        if (!arr.includes(midValue)) {
          return midValue;
        } else {
          // call firstInterval
          let id: number = getIndex(minValue, midValue);
          // If noId call secondInterval
          id = (!id) ? getIndex(midValue, maxValue) : 0;
          return id;
        }
      }
    }
    if (arr && arr.length) {
      const minValue: number = Math.min(...arr);
      const maxValue: number = Math.max(...arr);
      let _index: number = getIndex(minValue, maxValue);
      if (!_index) {
        _index = (minValue - 1) > 0 ? (minValue - 1) : (maxValue + 1);
      }
      return _index;
    } else {
      return 1;
    }
  }

  validateRating(_id: string | number): number {
    // Default Rating is '1', Rating should be 0-10;
    let id: number = Number(_id);
    id = (isNaN(id) || id === 0) ? this.heroDefaultId : (id % 10);
    return id;
  }

  private handleError<T>(operation = 'ooperation', result?: T) {
    return (error:any): Observable<T> => {
      return of(result as T);
    }
  }
}
