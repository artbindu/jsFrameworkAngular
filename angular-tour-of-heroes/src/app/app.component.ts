import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App Component: angular-tour-of-heroes';
  constructor() {
    setTimeout(() => {
      this.title = 'App Component (Reload): angular-tour-of-heroes';
    }, 2000);
  }
}
