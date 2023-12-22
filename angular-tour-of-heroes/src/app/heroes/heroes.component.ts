import { Component } from '@angular/core';
import { Hero } from '../interfaces/heros';
// import UpperCasePipe from common-module
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
